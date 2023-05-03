import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import '../style/TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue) {
            addTodo(newTodoValue)
            setOpenModal(false);
        } 
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Type your new <span>ToDo</span></label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Go for a run"></textarea>
            <div className="todoform-button-container">
                <button type="button" className="close-button" onClick={onCancel}>Cancel</button>
                <button type="submit" className="add-button" onClick={onSubmit}>Add</button>
            </div>
        </form>
    )
}

export { TodoForm }