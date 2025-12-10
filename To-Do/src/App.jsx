import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="task-container">
      <h2 className="heading">Task Manager</h2>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          className="task-input"
          required
        />
        <button className="add-btn">
          Add
        </button>
      </div>

      {/* ✅ List of Tasks */}
      <div className="task-list">
        {((task) => (
          <div className="task-item" key={task.id}>
            <input type="checkbox" className="task-checkbox" />

            <span
              className="task-text"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            ></span>

            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
