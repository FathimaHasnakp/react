import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  // Load tasks from localStorage on first render
  useEffect(() => {
    const storedPending = JSON.parse(localStorage.getItem("pendingTasks")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setPendingTasks(storedPending);
    setCompletedTasks(storedCompleted);
  }, []);

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [pendingTasks, completedTasks]);

  // Add new task
  const handleAddTask = () => {
    if (task.trim() === "") return;
    setPendingTasks([...pendingTasks, { id: Date.now(), text: task }]);
    setTask("");

    // Show tooltip for 1.5 seconds
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  };

  // Move task to completed
  const handleCheck = (id) => {
    const item = pendingTasks.find((t) => t.id === id);
    setPendingTasks(pendingTasks.filter((t) => t.id !== id));
    setCompletedTasks([...completedTasks, item]);
  };

  // Move task back to pending
  const handleUncheck = (id) => {
    const item = completedTasks.find((t) => t.id === id);
    setCompletedTasks(completedTasks.filter((t) => t.id !== id));
    setPendingTasks([...pendingTasks, item]);
  };

  return (
    <div className="todo-container">

      {/* SECTION 1: Add Task */}
      <div className="add-task-section">
        <h2>Add Tasks</h2>

        <div className="input-row">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={handleAddTask}>Add</button>
        </div>

        {/* Tooltip when task added */}
        {showTooltip && <span className="tooltip">Task Added ✔</span>}
      </div>

      {/* SECTION 2: Pending Tasks */}
      <div className="task-section">
        <h3>Pending Tasks</h3>

        <ul>
          {pendingTasks.length === 0 && <p className="empty">No pending tasks</p>}
          {pendingTasks.map((t) => (
            <li key={t.id} className="task-item">
              <input type="checkbox" onChange={() => handleCheck(t.id)} />
              <span>{t.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* SECTION 3: Completed Tasks */}
      <div className="task-section completed">
        <h3>Completed Tasks</h3>

        <ul>
          {completedTasks.length === 0 && <p className="empty">No completed tasks</p>}
          {completedTasks.map((t) => (
            <li key={t.id} className="task-item completed-item">
              <input type="checkbox" checked onChange={() => handleUncheck(t.id)} />
              <span>{t.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
