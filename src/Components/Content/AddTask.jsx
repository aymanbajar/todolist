import './AddTask.css'
import { useState } from 'react'
export let newTask =''
export default function AddTask(){
    const [addingTask,setAddingTask] = useState([''])
    return(
        <div className="add">
            <input type="text" placeholder="عنوان المهة" value={addingTask} onChange={(event) => {
                setAddingTask(event.target.value)
            }}   />
            <button className='addButton' onClick={() => {
               
            }}>اضافة</button>
        </div>
    )
}