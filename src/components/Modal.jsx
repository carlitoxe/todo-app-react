import React from "react";
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import '../style/Modal.css';

function Modal({ children, setOpenModal }) {
/*     const closeModal = () => {
        setOpenModal(false)
    } */

    return createPortal(    
        <div className="modal">
            {children}
            {/* <button onClick={closeModal} className="close-modal">Cancel</button> */}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };