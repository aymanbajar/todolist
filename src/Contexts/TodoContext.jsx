import { createContext, useContext, useReducer, useEffect } from "react";
import todosReducer from "../Reducers/todosReducer";

// 1. السياق الأساسي
export const TodoContext = createContext();

// 2. هوك مخصص لتسهيل الوصول للسياق
export function useTodos() {
  return useContext(TodoContext);
}

// 3. مزود السياق
export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  // تحميل البيانات من localStorage أول مرة فقط
  useEffect(() => {
    dispatch({ type: "LOAD_TODOS" });
  }, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
