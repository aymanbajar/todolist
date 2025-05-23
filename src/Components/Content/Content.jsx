import { useState } from "react";
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";


import "./Task.css";
import Task from "./Task";
import AddTask from "./AddTask";

let nextId = 6;

export default function Content() {
  const [addingTask, setAddingTask] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successDelete, setSuccessDelete] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "قراءة كتاب", description: "كل يوم", isCompleted: false },
    {
      id: 2,
      name: "ممارسة الرياضة",
      description: "30 دقيقة يوميًا",
      isCompleted: false,
    },
    {
      id: 3,
      name: "كتابة ملاحظات",
      description: "مراجعة دروس اليوم",
      isCompleted: false,
    },
    {
      id: 4,
      name: "البرمجة",
      description: "تطوير المشروع الشخصي",
      isCompleted: false,
    },
    {
      id: 5,
      name: "الاسترخاء",
      description: "الاستماع إلى موسيقى هادئة",
      isCompleted: false,
    },
  ]);

  const handleCompleted = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setSuccessDelete("❌ تم الحذف بنجاح");
    setTimeout(() => setSuccessDelete(""), 3000);
  };

  const handleAddTask = () => {
    if (!addingTask.trim()) return;

    setTasks([
      ...tasks,
      { id: nextId++, name: addingTask, description: "", isCompleted: false },
    ]);
    setSuccessMessage("✅ تم إضافة المهمة بنجاح");
    setTimeout(() => setSuccessMessage(""), 3000);
    setAddingTask("");
  };

  const renderMessage = (message) => (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#d4edda",
        color: "#155724",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );

  return (
    <div className="content">
      {successMessage && renderMessage(successMessage)}
      {successDelete && renderMessage(successDelete)}


      <ul style={{ padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Task title={task.name} description={task.description} />
            <div className="states">
              <button
                style={{ backgroundColor: "#ff4d4f" }}
                id="delete"
                onClick={() => handleDelete(task.id)}
              >
                <FaTrash />
              </button>
              <button id="edit">
                <FaEdit />
              </button>
              <button
                style={{
                  backgroundColor: task.isCompleted ? "green" : "#242424",
                  color: "white",
                  transition: "0.3s",
                }}
                id="completed"
                onClick={() => handleCompleted(task.id)}
              >
                <FaCheckCircle />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="add">
        <input
          type="text"
          placeholder="عنوان المهمة"
          value={addingTask}
          onChange={(e) => setAddingTask(e.target.value)}
        />
        <button className="addButton" onClick={handleAddTask}>
          إضافة
        </button>
      </div>
    </div>
  );
}
