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
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC"></g><g id="SVGRepo_iconCarrier"> <g> <g id="plus_x5F_alt"> <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M24,18h-6v6h-4v-6H8v-4 h6V8h4v6h6V18z"></path> </g> </g> </g></svg>
        </button>
    )
}

export { CreateTodoButton }