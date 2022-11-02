import React from "react";
import { useParams } from "react-router";
import Task from "./Task";


const TaskPage = ({ tasks, completeTask, onDelete, value,getColor,color }) => {

  const { status } = useParams();
  
  
  let flag = true;
 
  let filter = true;
  let filteredStats = '';

  if(status.toLocaleLowerCase()==="all" ||status.toLocaleLowerCase()===" "||status.toLocaleLowerCase()==="/" ) {
    filteredStats = `All`;
    flag = true;
    value(true);
  }  else if (status.toLowerCase()==="done") {
    filteredStats = `Done`;
    flag = false;
    filter= true;
    value(true);
  }else if(status.toLowerCase()==="pending") {
    filteredStats = `Pending`;
    flag = false;
    filter = false
    value(true);
  } else {
    value(false);
  }
  return (

   <div>
        <h2>{filteredStats} Task </h2>
         {
             flag ? tasks.map((task) => <Task
              key={task.id}
              id={task.id}
              name={task.name}
              status={task.done}
              completeTask={completeTask}
              onDelete={onDelete}
              getColor={getColor}
              color={color}
            /> ) :
          tasks
          .filter((task) => task.done === filter)
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              status={task.done}
              completeTask={completeTask}
              onDelete={onDelete}
              getColor={getColor}
              color={color}
            />
          ))}
    </div>
  );
};

export default TaskPage;
