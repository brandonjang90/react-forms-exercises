import React, {useState} from "react";

const Todo = ({id, todo, removeTodo}) => {
    const handleRemove = () => {
        removeTodo(id)
    }
    return (
        <li>
            { todo }
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
}

export default Todo;
