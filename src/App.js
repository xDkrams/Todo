import "./App.css";
import { useState } from "react";
import TaskPage from "./components/TaskPage";
import Err from "./components/Err";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';


const App = () => {
  const initialTasks = [
    {
      id: uuidv4(),
      name: "Fix Bed",
      done: false,
    },
    {
      id: uuidv4(),
      name: "Walk Dog",
      done: true,
    },
    {
      id: uuidv4(),
      name: "Clean Bathroom",
      done: false,
    },
    {
      id: uuidv4(),
      name: "Clean PC",
      done: false,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks); //array
  const [addNewTask, setNewTask] = useState(''); //newTask
  const [editFlag, setEditFlag] = useState(false); //toggle add new task
  const [temp, setTemp] = useState(true); // route error


  //filters all task done:true
  const doneTasks = tasks.filter((task) => task.done);
  //filters all task done:false
  const notDone = tasks.filter((task) => !task.done);

  const completeTaskHandler = (id) => {
    let newState = [...tasks];
 
    //look for the index of the given ID
    const index = newState.findIndex((task) => task.id === id);
  
    //change the done from false to true
    newState[index].done = true;

    //set the State to the new value
    setTasks(newState);
  };

  const onChange = (e) =>{
    setNewTask(e.target.value)
          
}
  //adding new task
  const addingTask = (e) => {
    e.preventDefault();
    const AddednewTask = {
      id: uuidv4(),
      name: addNewTask,
      done: false
      }
  
    const updatedTask = tasks.filter(task => task.name.trim().toLowerCase() === addNewTask.trim().toLowerCase())
    
      if(addNewTask.trim() !== "" && updatedTask.length === 0) {
        const newTask = [AddednewTask, ...tasks ]
        setTasks(newTask)
        alert(`New Task Added!`)
        setEditFlag(false)
      }else if (addNewTask.trim() === ""){
        alert(`Task Name is empty`)
      }else{
        alert(`Data already registered`)
      }
      setNewTask('');    
}
 
  // delete task;
  const deleteTask = (id) => {
    const newTask = tasks.filter(task => task.id !==id)
    setTasks(newTask)
  }

  //toggle add task button
  const handleFlag=(e)=> {
    e.preventDefault()
    editFlag ? setEditFlag(false) : setEditFlag(true) 
  }

 const value=(i)=>{
  let val = i;
  setTemp(val);
 }
 const [color, setColor] = useState()

 const getColor = (col) => {
   setColor(col)
 
 }  
 
  return (
    <div>
     { temp ? 
      <div className="App">
       <div>
         <div className='header'> TO-DO APP </div>
        <nav className="Nav">
             {!editFlag && 
              <button className = "add-Btn" onClick={handleFlag}> Add Task </button>          
            }
            {editFlag && <form>
                <div>
                <label> Task Name:  </label>
                  <input name="name" type="text" onChange={onChange} value={addNewTask}/>
                  <button  className = "add-Btn" onClick={(e)=>addingTask(e)}> Add Task </button>
                  <button  className = "add-Btn" onClick={(e)=>handleFlag(e)} > Cancel </button>
                </div> 
              </form>
            }
        </nav>
        <div className="link">   
          <Link className ="links" to="All">All Tasks</Link> | <Link className ="links" to="Done"> Done Tasks</Link> | <Link className ="links" to="Pending"> Pending Tasks</Link> 
        </div>
        <br/>
      </div>
      <div className="Task-Cont">
        <Routes>
          <Route path=":status"  element={<TaskPage tasks={tasks} completeTask={completeTaskHandler} onDelete = {deleteTask} value={value} getColor={getColor} color={color} />}  />
        </Routes>
      </div>
    </div>
    :
    <div> 
        <Routes>
            <Route path="*" element={<Err/>}/>
        </Routes>
    </div> 
    }
    </div>
  );
};

export default App;
