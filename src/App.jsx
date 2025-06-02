import "./App.css";
import TodoList from "./Components/TodoList";
import { ToastProvider } from "./Contexts/ToastContext";
import { TodoProvider } from "./Contexts/TodoContext"; // ✅ استيراد المزود الصحيح

function App() {
  return (
    <ToastProvider>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </ToastProvider>
  );
}

export default App;
