import React from 'react';

const Todo = props => {
    return (
        <div
         onClick={() => props.toggleCompleted(props.item.id)}
         className="IsComplete">
            <p>{props.item.task} </p>
        </div>
    );
};

export default Todo;