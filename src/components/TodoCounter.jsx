import React, { useContext } from "react";
import '../style/TodoCounter.css';

function TodoCounter({ completedTodos, countTodos, loading }) {
   
    return (
        <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
            You have completed {completedTodos} of {countTodos} ToDos
        </h2>
    )
}

export { TodoCounter };