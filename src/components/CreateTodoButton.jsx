import React from "react";
import '../style/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
  /*       if(!openModal){ 
            setOpenModal(true);
        } else {
            setOpenModal(false)
        } */
    }

  
    
    return (
        <button 
            className="CreateTodoButton" 
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }