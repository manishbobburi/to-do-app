import { useState, useEffect, useCallback, useId} from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task.trim != "") {
      setTasks([...tasks,task]);
      setTask("");
    }
  }

  return (
    <>
      <div className="min-w-full h-screen">
        <div className="">
          <h1 className="font-mono text-4xl font-bold text-black">Tasks For The Day</h1>
          <div>
            <input type="text"
              placeholder="Enter Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="bg-white"
            />
            <button onClick={addTask} className="bg-blue-400 border-none"> Add Task</button>
            <div>
              {tasks.map((t,index) => {
                return <p key={index} className="text-black">{t}</p>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
