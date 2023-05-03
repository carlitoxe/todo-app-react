import React from "react";
import '../style/EmptyTodos.css'

function EmptyTodos() {
    return (
        <div className="emptytodos-container">
            {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#535bf2" stroke="#535bf2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon fill="none" stroke="#535bf2" stroke-width="2" stroke-miterlimit="10" points="55,1 55,54 59,62 63,54 63,1 "></polygon> <line fill="none" stroke="#535bf2" stroke-width="2" stroke-miterlimit="10" x1="55" y1="11" x2="63" y2="11"></line> <polyline fill="none" stroke="#535bf2" stroke-width="2" stroke-miterlimit="10" points="14,8 1,8 1,63 45,63 45,8 32,8 "></polyline> <polygon fill="none" stroke="#535bf2" stroke-width="2" stroke-miterlimit="10" points="27,5 27,1 19,1 19,5 15,5 13,13 33,13 31,5 "></polygon> </g></svg> */}
            <img src="https://www.svgrepo.com/download/442379/task-past-due-symbolic.svg" alt="emptytodo-logo" className="emptytodos-icon" />
            <p>Oh, you've got nothing!</p>            
            <p className="emptytodos-text">Use <span className="emptytodos-add-button">+</span> button to add a new TODO</p>
        </div>
    );
}

export { EmptyTodos };