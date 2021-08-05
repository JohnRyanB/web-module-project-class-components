import React from "react";
import Todo from "./Todo";

const TodoList = props => {


    return(
        <div className="todo-list">
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted} />
            ))}
            <button onClick={props.clearCompleted} className="clear-btn">
        Clear Completed
            </button>
        </div>
    )
}

export default TodoList;