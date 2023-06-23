import React, { useContext, useState } from "react";
import '../style/TodoForm.css';
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
    const navigate = useNavigate();
    const [ newTodoValue, setNewTodoValue ] = useState( props.oldText || '');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        //setOpenModal(false);
        navigate('/')
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodoValue) {
            props.submitEvent(newTodoValue)
            //setOpenModal(false);
        } 
        navigate('/')
    }

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          onSubmit(e);
        }
    }


    return (
        <form onSubmit={onSubmit}>
            {/* <label>Type your new <span>ToDo</span></label> */}
            {props.title}
            <textarea value={newTodoValue} onChange={onChange} onKeyDown={onEnterPress} placeholder="Go for a run"></textarea>
            <div className="todoform-button-container">
                <button type="button" className="close-button" onClick={onCancel}>Cancel</button>
                <button type="submit" className="add-button" onClick={onSubmit}>{props.submitText}</button>
            </div>
        </form>
    )
}

export { TodoForm }