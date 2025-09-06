import React from "react";
import "./App.css";
// components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import AddForm from "./components/AddForm";
import { TaskContext } from "./contexts/TaskContext";
import { useContext } from "react";

function App() {
  const { listTasks } = useContext(TaskContext);
  
  const lists = listTasks.map((task) => <MainContent key={task.id} task={task} />);

  return (
    <div
      dir="rtl"
      className="mx-auto my-50   w-[50%]  bg-gray-300 rounded-xl p-4 shadow-lg shadow-gray-400"
    >
      <Header/>
      <hr />
      <br />
      <div className=" max-h-[200px] overflow-y-auto ">
        {lists}
      </div>
      <AddForm />
    </div>
  );
}

export default App;
