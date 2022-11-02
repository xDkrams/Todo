import React, {useState} from "react";

const AddTask = ( {submit} ) => {
    const [task, setNewTask] = useState({
        name: '',
        done: false
    })
    const onChange = (e) =>{
        const inputTask = e.target.name;
        

        if(inputTask === "name") {
            setNewTask({...task, name: e.target.value})
        }   
        
    }
    const onSubmit =(e)=> {
        e.preventDefault()
        submit(task)
    }


    return(
        <div>
            <form>
                <label> Task Name:  </label>
                <input name="name" type="text" onChange={onChange}/>
                {/* <label> Status: </label>
                <input name="done" type="text" onChange={onChange}/>  */}
                <button onClick={onSubmit}> Add Task </button>
            </form>
        </div>
    );

}
export default AddTask;