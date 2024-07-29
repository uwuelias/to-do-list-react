import { useState } from "react";

export const TodoList = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodoList([...todoList, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i != index);
    setTodoList(newTodoList);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          autoFocus
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {index + 1}. {todo}{" "}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
