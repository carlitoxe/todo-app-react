import React from 'react';
import { useStorageListener } from './useStorageListener';
import '../style/ChangeAlert.css'

function ChangeAlert({ synchronize }) {
    const { show, toggleShow } = useStorageListener(synchronize);

    if (show) {
        return (
                     <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>It looks like you modified your TODOs in another tab</p>
                <p>¿Do you want synchronize the TODOs?</p>
                <button
                    className="Refresh-button"
                    onClick={toggleShow}
                >
                    Yes!
                </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export { ChangeAlert }