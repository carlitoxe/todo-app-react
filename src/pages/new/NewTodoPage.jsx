import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../hooks/useTodos";

function NewTodoPage() {
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;

    return (
        <div className="newtodo-container">
            <TodoForm 
                title={<label>Type your new <span>ToDo</span></label>}
                submitText="Add"
                submitEvent={(text) => addTodo(text)}
            /> 
        </div>
    )
}

export { NewTodoPage }