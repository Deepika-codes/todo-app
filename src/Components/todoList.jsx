import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const onTextInput = (e) => {
    setText(e.target.value);
  };
  const onAddTask = () => {
    if (text.trim() === "") {
      toast.error("Todo cannot be empty!");

      return;
    }
    if (todos.includes(text)) {
      toast.error("Task already exists");
      return;
    }
    setTodos([...todos, text.trim()]);
    setText("");
    toast.success("Task added successfully!");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((val, ind) => ind !== index));
    toast.info("Task deleted.");
  };
  return (
    <div>
      <div className="task">
        <h1>Get started. Add your first task! </h1>

        <div className="box">
          <input
            type="text"
            value={text}
            placeholder="Write your Taks To-do"
            onChange={onTextInput}
          />
          <button onClick={onAddTask}>
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className="todo-list">
        {todos.map((task, index) => (
          <TodoItem
            index={index}
            task={task}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
