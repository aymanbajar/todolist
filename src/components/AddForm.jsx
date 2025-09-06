import { useContext,useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { v4 as uuidv4 } from "uuid";
export default function AddForm() {
    const{listTasks,setListTasks}=useContext(TaskContext);
    const [newTaskName,setNewTaskName]=useState("");  
    const [showModalAdd,setShowModalAdd]=useState(false);
    function addTask(){
        if(newTaskName.trim() === "") return; 
        const newTask ={
            id: uuidv4(),
            taskName: newTaskName,
            completed: false,
        }
        setListTasks([...listTasks,newTask]);
        setNewTaskName("");
        setShowModalAdd(true);
        setTimeout(() => {
            setShowModalAdd(false);
        },3000)
    }  
    
    return (
      <>
        <div
          dir="rtl"
          className="flex justify-between items-center gap-2  p-4 text-3xl"
        >
          <input
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className="w-[70%] text-black bg-amber-500 rounded outline-none border-2 border-black h-14 p-2"
            type="text"
            placeholder="قم بإضافة مهمة جديدة"
          />
          <button
            onClick={() => {
              addTask();
            }}
            className="w-[30%] bg-blue-500 text-white rounded h-14 hover:bg-gray-700"
          >
            إضافة
          </button>
        </div>

        {/* Modal Add */}
        {showModalAdd && (
            <div  className="fixed bottom-24 left-15 w-[250px] bg-green-600 h-[50px] text-white text-center p-4  rounded-lg shadow-lg ">
                <h1>تم  إضافة مهمة جديدة  بنجاح</h1>
            </div>
        )}
      </>
    );
}