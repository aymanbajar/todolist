import Header from "./Header";
import Todo from "./Todo";
import "./todolist.css";
import AddTodo from "./AddTodo";
import { useMemo, useState } from "react";
import { useTodos } from "../Contexts/TodoContext"; // ✅ بدل useContext

export default function TodoList() {
  const { todos } = useTodos(); // ✅ استخدام useTodos للوصول إلى todos فقط
  const [displayTodo, setDisplayTodo] = useState("all");

  const TodosCompleted = useMemo(() => {
    return todos.filter((t) => t.isCompleted);
  }, [todos]);

  const TodosNotCompleted = useMemo(() => {
    return todos.filter((t) => !t.isCompleted);
  }, [todos]);

  let renderingTodo = [];

  if (displayTodo === "all") {
    renderingTodo = todos;
  } else if (displayTodo === "completed") {
    renderingTodo = TodosCompleted;
  } else {
    renderingTodo = TodosNotCompleted;
  }

  return (
    <div className="todolist">
      <Header />
      <div className="btns">
        <button value={"all"} onClick={() => setDisplayTodo("all")}>
          الكل
        </button>
        <button value={"completed"} onClick={() => setDisplayTodo("completed")}>
          منجز
        </button>
        <button
          value={"notCompleted"}
          onClick={() => setDisplayTodo("notCompleted")}
        >
          غير منجز
        </button>
      </div>
      <div style={{ overflowY: "scroll", height: "500px" }}>
        {renderingTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <AddTodo />
    </div>
  );
}
