import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo} from "../redux/actions/todo";

function Task({item, index}) {
    const dispatch = useDispatch()
    let removeTask = () => {
        dispatch(removeTodo(index))
    }
    return (
        <li className="task-list__item">
            <div className="text">{item}</div>
            <button onClick={removeTask} className="task-list__btn">Удалить</button>
        </li>
    );
}

export default Task;