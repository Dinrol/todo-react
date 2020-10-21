import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todo";

function NewTask() {
    const [taskText, setTaskText] = useState()

    let onChangeTextTask = (e) => {
        setTaskText(e.target.value)
    }
    const handleKeyUP = (e) => {
        if (e.keyCode === 13) {
            addTask()
        }
    }
    const dispatch = useDispatch()
    let addTask = () => {
        if (taskText) {
            dispatch(addTodo(taskText))
            setTaskText('')
        }
    }
    return (
        <div className="todo__add-task">
            <input onChange={ (e)=>onChangeTextTask(e)}
                   onKeyUp={handleKeyUP}
                   value={taskText} type="text"
                   placeholder='Новая задача...'/>
            <button onClick={addTask}>ADD</button>
        </div>
    );
}

export default NewTask;