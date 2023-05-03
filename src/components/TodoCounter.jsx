import React, { useContext } from "react";
import { TodoContext } from './TodoContext'
import '../style/TodoCounter.css';

function TodoCounter() {
    const { countTodos, completedTodos } = useContext(TodoContext)
    return (
        <h2 className="TodoCounter">You have completed {completedTodos} of {countTodos} ToDos</h2>
    )
}

export { TodoCounter };