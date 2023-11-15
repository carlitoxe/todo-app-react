import { useState } from "react";

function useStorageListener( synchronize ) {
        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('There were changes in TODOS_V1');
                setStorageChange(true);
            }
        })
        
        const toggleShow = () => {
            synchronize();
            setStorageChange(false);
        }

        return {
            show: storageChange,
            toggleShow
        } 
    }

export { useStorageListener };