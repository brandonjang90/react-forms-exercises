import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import Todo from './Todo';
import NewTodoForm from "./NewTodoForm";
 
const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <div>
            {todos.map(({id, task}) => (
                <Todo 
                key={id}
                id={id} 
                todo={task}
                removeTodo={removeTodo}/>
            ))}
            </div>
        </div>
    )
}

export default TodoList;
