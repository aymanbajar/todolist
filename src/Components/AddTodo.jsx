import "./addtodo.css";
import { useState } from "react";
import { useToast } from "../Contexts/ToastContext";
import { useTodos } from "../Contexts/TodoContext"; // ✅ استدعاء الديسباتش من السياق

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { showToast } = useToast();
  const { dispatch } = useTodos(); // ✅

  function AddTodo(title) {
    dispatch({
      type: "ADD_TODO",
      payload: { title },
    });
    showToast("تمت إضافة المهمة بنجاح");
  }

  return (
    <div className="addtodo">
      <input
        type="text"
        placeholder="إضافة مهمة جديدة"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        className="add"
        disabled={title.length === 0}
        onClick={() => {
          AddTodo(title);
          setTitle("");
        }}
      >
        إضافة
      </button>
    </div>
  );
}
