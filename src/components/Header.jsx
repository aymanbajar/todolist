import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function Header() {
  const { listTasks, setListTasks } = useContext(TaskContext);
  const [allTasks] = useState(listTasks); // نسخة أصلية للاستخدام عند عرض الكل

  return (
    <div className="flex justify-evenly items-center gap-4 p-2 md:p-4">
      <button
        onClick={() => {
          const completed = allTasks.filter((task) => task.completed);
          setListTasks(completed);
        }}
        className="bg-blue-500 text-white sm:text-xl md:text-2xl font-bold py-2 px-4 rounded-xl hover:bg-white hover:text-blue-500"
      >
        منجز
      </button>

      <button
        onClick={() => {
          const notCompleted = allTasks.filter((task) => !task.completed);
          setListTasks(notCompleted);
        }}
        className="bg-blue-500 text-white  font-bold sm:text-xl md:text-3xl    py-2 px-4 rounded-xl hover:bg-white hover:text-blue-500"
      >
        غير منجز
      </button>

      <button
        onClick={() => {
          setListTasks(allTasks); // إعادة كل المهام
        }}
        className="bg-blue-500 text-white sm:text-xl md:text-2xl font-bold py-2 px-4 rounded-xl hover:bg-white hover:text-blue-500"
      >
        الكل
      </button>
    </div>
  );
}
