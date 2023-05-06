import React, { useContext } from "react";
import '../style/TodoCounter.css';

function TodoCounter({ completedTodos, countTodos }) {
   
    return (
        <h2 className="TodoCounter">You have completed {completedTodos} of {countTodos} ToDos</h2>
    )
}

export { TodoCounter };