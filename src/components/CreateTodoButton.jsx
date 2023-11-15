import React from "react";
import "../style/CreateTodoButton.css";
import { useNavigate } from "react-router-dom";

function CreateTodoButton() {
  const navigate = useNavigate();
  /* 
     const onClickButton = () => {
        
        setOpenModal(prevState => !prevState)
         if(!openModal){ 
            setOpenModal(true);
        } else {
            setOpenModal(false)
        } 
    } 
 */

  return (
    <button className="button-container" onClick={() => navigate("/new")}>
      <svg className="CreateTodoButton" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g id="plus_x5F_alt">
              {" "}
              <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M24,18h-6v6h-4v-6H8v-4 h6V8h4v6h6V18z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
}

export { CreateTodoButton };
