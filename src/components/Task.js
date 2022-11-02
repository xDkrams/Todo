import React from "react";

const Task = ({
  status,
  completeTask,
  id,
  onDelete,
  name,
  getColor,
  color,
  idColor,
}) => {
  const componentToShow = () => {
    if (status) {
      return <p> Done</p>;
    } else if (!status) {
      return (
        <button className="Task-Btn" onClick={() => completeTask(id)}>
          Task Done
        </button>
      );
    } else {
      return <div></div>;
    }
  };
  const handleDelete = (id) => {
    onDelete(id);
  };
  const displayRed = (id) => {
    getColor(`#EB1D36`);
  };
  const displayGreen = (id) => {
    getColor(`#3CCF4E`);
  };
  const displayYellow = (id) => {
    getColor(`#f7ec09`);
  };

  return (
    <div>
      <div className="Task" style={{ backgroundColor: `${color}` }}>
        <div>
          <h2>{name}</h2>
          {componentToShow()}
          <button className="Task-Btn" onClick={() => handleDelete(id)}>
            {" "}
            Delete{" "}
          </button>
        </div>
        <button
          id="red"
          className="circle"
          onClick={() => displayRed(id)}
        ></button>
        <button
          id="green"
          className="circle"
          onClick={() => displayGreen(id)}
        ></button>
        <button
          id="yellow"
          className="circle"
          onClick={() => displayYellow(id)}
        ></button>
      </div>
    </div>
  );
};
export default Task;
