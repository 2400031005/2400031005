import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  const removeTask = (i) => {
    setList(list.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {list.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
