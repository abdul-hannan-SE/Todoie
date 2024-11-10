import useTodo from "../contexts/todo";
import { useState } from "react";
function TodoForm() {
  const { addTodo } = useTodo();
  const [inputValue, setInput] = useState("");

  return (
    <form
      className="flex"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(inputValue);
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg  bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
