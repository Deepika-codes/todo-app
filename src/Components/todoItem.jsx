import { Square, SquareCheck, Trash } from "lucide-react";
import { useState } from "react";

const TodoItem = ({ task, index, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onTick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className="list"
      style={{
        backgroundColor: isChecked ? "#b0c4de" : "#FF7F00",
      }}
    >
      <p style={{ color: isChecked ? "black" : "white" }}>
        {index + 1}. {task}
      </p>
      <button className="but1" onClick={onTick}>
        {isChecked ? <SquareCheck /> : <Square />}
      </button>
      <button className="but2" onClick={deleteTask}>
        <Trash />
      </button>
    </div>
  );
};
export default TodoItem;
