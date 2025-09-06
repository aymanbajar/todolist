import { useContext ,useState} from "react";
import { TaskContext } from "../contexts/TaskContext";
export default function MainContent({ task }) {
  const { listTasks, setListTasks } = useContext(TaskContext);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
const [editedTaskName, setEditedTaskName] = useState("");
const [editTaskId, setEditTaskId] = useState(null);

  function deleteTask(id) {
    const newListTasks = listTasks.filter((task) => task.id != id);
    setListTasks(newListTasks);
    setShowModalDelete (false);
  }

  function editTask(id){
    const editedTask = listTasks.find((task) => task.id === id);
    setEditedTaskName(editedTask.taskName);
    setEditTaskId(id);
    setShowModalEdit(true);
  }
function saveTask() {
  setListTasks(
    listTasks.map((task) =>
      task.id === editTaskId ? { ...task, taskName: editedTaskName } : task
    )
  );
  setShowModalEdit(false);
}
function completedTask(id) {
  setListTasks(
    listTasks.map((task) => {
      task.id === id ? (task.completed = !task.completed) : task;
      return task;  
    })
  );
}
  return (
    <>
      <div className="flex justify-between items-center mb-2 p-4 bg-amber-300 rounded-[5px] text-2xl font-medium hover:transition-all hover:duration-300 hover:p-8">
        <h1 className="text-black">{task.taskName}</h1>
        <div className="flex gap-4 text-blue-900">
          {/* delete task */}
          <button
            onClick={() => {
              setShowModalDelete(true);
            }}
            className="text-3xl text-red-700"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          {/* edit task */}
          <button
            onClick={() => editTask(task.id)}
            className="text-3xl text-black"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          {/* complete task */}
          <button onClick={() => completedTask(task.id)} className={`text-3xl text-${task.completed ? "green-900" : "white"}`}>
            <i className="fa-solid fa-circle-check"></i>
          </button>
        </div>
      </div>

      {/* Modal Delete*/}
      {showModalDelete && (
        <div className="fixed inset-0 bg-white/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] text-center">
            <h2 className="text-xl font-bold mb-4">هل أنت متأكد؟</h2>
            <p className="mb-6 text-gray-700">هل تريد حقًا حذف هذه المهمة؟</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModalDelete(false)}
                className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
              >
                إلغاء
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit */}
      {showModalEdit && (
        <div className="fixed inset-0  bg-white/50 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-amber-50 w-[400px] h-[200px] rounded-lg shadow-lg p-6 gap-4">
            <h2>تعديل المهمة</h2>
            <input
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="تعديل المهمة"
              type="text"
              value={editedTaskName}
              onChange={(e) => setEditedTaskName(e.target.value)}
            />
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => saveTask()}
                className="bg-blue-700 p-2 rounded text-white"
              >
                حفظ
              </button>
              <button
                onClick={() => setShowModalEdit(false)}
                className="bg-red-700 p-2 rounded text-white"
              >
                الإلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
