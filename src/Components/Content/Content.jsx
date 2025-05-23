import "./Content.css";
import Task from "./Task";
import AddTask from "./AddTask";
import { useState } from "react";
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";
import "./Task.css";

let nextId = 6;

export default function Content() {
  const [addingTask, setAddingTask] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successDelete, setSuccessDelete] = useState("");
  const [task, setTask] = useState([
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

  const compoletedList = [];

  function completed(Id) {
    console.log(compoletedList);
    setTask((prev) => prev.filter((t) => t.id !== Id));
  }
  function Deleted(Id) {
    setTask((prev) => prev.filter((t) => t.id !== Id));
    setSuccessDelete(" ❌ تم الحذف بنجاح ");
    setTimeout(() => {
      setSuccessDelete("");
    }, 3000);
  }

  const listTask = task.map((t) => (
    <li
      key={t.id}
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <Task title={t.name} description={t.description || ""} />
      <div className="states">
        <button
          style={{
            backgroundColor: t.isDeteled ? "Red" : "#242424",
          }}
          id="delete"
          onClick={() => {
            Deleted(t.id);
          }}
        >
          <FaTrash />
        </button>
        <button id="edit">
          <FaEdit />
        </button>
        <button
          style={{
            backgroundColor: t.isCompleted ? " green" : "#242424",
            color: "white",
            transition: "0.3s",
          }}
          id="completed"
          onClick={() => completed(t.id)}
        >
          <FaCheckCircle />
        </button>
      </div>
    </li>
  ));

  const handleAddTask = () => {
    if (addingTask.trim() === "") return;

    setTask([
      ...task,
      { id: nextId++, name: addingTask, description: "", isCompleted: false },
    ]);
    setSuccessMessage("✅ تم إضافة المهمة بنجاح");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    setAddingTask("");
  };

  return (
    <div className="content">
      {successMessage && (
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
          {successMessage}
        </div>
      )}
      {successDelete && (
        <div
          style={{
            position: "fixed",git 
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
          {successDelete}
        </div>
      )}
      <div className="buttons">
        <button>الكل</button>
        <button>منجز</button>
        <button>غير منجز</button>
      </div>
      {listTask}
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
