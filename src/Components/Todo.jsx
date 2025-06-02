import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import "./todo.css";
import { useState } from "react";
import { useToast } from "../Contexts/ToastContext";
import { useTodos } from "../Contexts/TodoContext"; // ✅ استدعاء الصحيح

export default function Todo({ todo }) {
  const [showModal, setShowModal] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const { showToast } = useToast();
  const { dispatch } = useTodos(); // ✅ استخدام الديسباتش من السياق

  function checkedTodo(id) {
    dispatch({
      type: "CHECK_TODO",
      payload: { id },
    });
    showToast("تم التعديل بنجاح ");
  }

  function handleChange(id) {
    dispatch({
      type: "EdIT_TODO",
      payload: { id, editTitle },
    });
    showToast("تم التحديث بنجاح ");
  }

  function handleDeleteConfirmed() {
    dispatch({
      type: "REMOVE_TODO",
      payload: { todo },
    });
    setShowModal(false);
    showToast("تم الحذف بنجاح ");
  }

  return (
    <>
      <div className="todo">
        <h2
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.title}
        </h2>
        <div className="buttons" id={todo.id}>
          <button
            className="check"
            onClick={() => checkedTodo(todo.id)}
            style={{
              backgroundColor: todo.isCompleted ? "green" : "white",
              color: todo.isCompleted ? "white" : "green",
            }}
          >
            <FaCheck />
          </button>
          <button
            className="edit"
            onClick={() => {
              setEditModel(true);
              setEditTitle(todo.title);
            }}
          >
            <FaEdit />
          </button>
          <button className="trash" onClick={() => setShowModal(true)}>
            <FaTrash />
          </button>
        </div>
      </div>

      {/* نافذة تأكيد الحذف */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>هل أنت متأكد أنك تريد حذف هذه المهمة؟</p>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>إلغاء</button>
              <button
                onClick={handleDeleteConfirmed}
                style={{ backgroundColor: "red", color: "white" }}
              >
                موافق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* نافذة التعديل */}
      {editModel && (
        <div className="modal-overlay">
          <div className="modal-edit">
            <input
              type="text"
              value={editTitle}
              onChange={(event) => {
                setEditTitle(event.target.value);
              }}
            />
            <div className="modal-buttons">
              <button onClick={() => setEditModel(false)}>الغاء</button>
              <button
                onClick={() => {
                  handleChange(todo.id);
                  setEditModel(false);
                }}
              >
                موافق
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
