import React from 'react';
import './scss/App.scss';
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import {useDispatch, useSelector} from "react-redux";
import {clearTodo} from "./redux/actions/todo";


function App() {
    const {items} = useSelector(({todoReducer}) => {
        return {
            items: todoReducer.items
        }
    })
    const dispatch = useDispatch()
    let clearTasks = () => {
        dispatch(clearTodo())
    }
    return (
        <div className="wrapper">
            <div className="todo">
                <div className="todo__header">
                    <h1>TO-DO LIST</h1>
                </div>
                <NewTask />
                <ul className="todo__task-list task-list">
                    {
                        items.map( (item, index) => <Task key={index} index={index} item={item}/>)
                    }
                </ul>
                <button onClick={clearTasks} className="todo__clear-tasks-btn">Clear</button>
            </div>
        </div>
    );
}

export default App;
