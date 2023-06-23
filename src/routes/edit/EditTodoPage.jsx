import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
    const location = useLocation();
    const params = useParams();
    const id = params.id;

    const { stateUpdaters, state } = useTodos();
    const { getTodo, loading } = state;
    const { editTodo } = stateUpdaters;

    let todoText;

    if (location.state?.todo) {
        todoText = location.state?.todo.text;
    } else if (loading) {
        return <p>Loading...</p>
    } else {
        const todo = getTodo(id);    
        todoText = todo.text;
    }
    
    return (
        <div className="newtodo-container">
            <TodoForm 
                title={<label>Edit <span>TODO</span></label>}
                oldText={todoText}
                submitText="Edit"
                submitEvent={(newText) => editTodo(id, newText)}
            /> 
        </div>
    )
}

export { EditTodoPage }