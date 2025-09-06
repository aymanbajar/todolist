import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// إنشاء Context
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  // الحالة المشتركة
  const [listTasks, setListTasks] = useState([
    {
      id: uuidv4(),
      taskName: "قراءة كتب",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      taskName: "مراجعة دروس",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      taskName: "ممارسة رياضة",
      isCompleted: false,
    },
  ]);

  return (
    <TaskContext.Provider value={{ listTasks, setListTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
