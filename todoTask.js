import { useState } from "react"
export default function SampleTodoDelete(){

    const [task,setTask] = useState('');
    const [listTask,setListTask] = useState([]);
    const [editDisplay,setEditDisplay]= useState({});
    const [editedTask, setEditedTask] = useState('');

    const getInputTask=()=>{
        if(task !== ''){
            setListTask([
                ...listTask,
                task
            ]);
            setTask('');
        }
    }
    
    const removeTask=(value)=>{
        console.log("remove....",value);
        setListTask(listTask.filter((elem)=>elem !== value));
    }

    const editTaskVal=(value)=>{
        setEditDisplay((preEditDisplay)=>({
            ...preEditDisplay,
            [value] : true
        }));
        // setEditedTask('');
    }


    const updateValue=(index)=>{
        const updatedList = [...listTask];
    updatedList[index] = editedTask;
    setListTask(updatedList);
    setEditDisplay(false);
        console.log("tesk==",task);
        setEditedTask('');
}
    return (
        <>
            <input value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={()=>getInputTask()}>Add Task</button>

            <button disabled={listTask.length == 0} onClick={()=>setListTask('')}>Delete</button>

            {listTask.length > 0  && listTask.map((elem, index)=>(
                <div style={{border: '1px solid red',width: '300px',height: '160px'}} key={index}>
                {elem}<br/>
                <input style={{ display : editDisplay[elem] ? 'block': 'none'}} value={editedTask} onChange={(e)=>setEditedTask(e.target.value)}/><button style={{ display : editDisplay[elem] ? 'none': 'block'}} onClick={(e)=>editTaskVal(elem)}>Edit</button>
                <button style={{ display : editDisplay[elem] ? 'block': 'none'}} onClick={()=>updateValue(index)}>update</button>
                <button onClick={()=>removeTask(elem)}>Remove</button>
                </div>))}
        </>
    )
}
