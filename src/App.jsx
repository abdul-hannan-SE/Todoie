import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./contexts/todo";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodo] = useState([]);
  const addTodo = (todo) => {
    setTodo((prev) => {
      return [{ id: Date.now(), completed: false, todo: todo }, ...prev];
    });
  };

  const editTodo = (todoMsg, id) => {
    setTodo((prev) => prev.map((item) => (item.id === id ? todoMsg : item)));
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  // const toggleCompleted = (id) => {
  //   const valu = setTodo((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? { id: item.id, todo: item.todo, completed: !item.completed }
  //         : item
  //     )
  //   );
  //   console.log(" value : ", valu);
  // };
  const toggleCompleted = (id) => {
    //console.log(id);
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  useEffect(() => {
    const getTodods = () => {
      const todoList = JSON.parse(localStorage.getItem("todos"));
      if (todoList && todoList.length > 0) setTodo(todoList);
    };
    getTodods();
  }, []);

  useEffect(() => {
    const item = JSON.stringify(todos);
    const todolist = localStorage.setItem("todos", item);
  }, [todos, setTodo]);
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, editTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((item) => (
              <div key={item.id} className="w-full">
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
