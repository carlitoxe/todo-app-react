import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          console.error(error)
          setError(error)
        }
      }, 1000)
    }, []);
  
  
    const saveItem = itemUpdate => {
      try {
        const stringifiedItem = JSON.stringify(itemUpdate);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(itemUpdate);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }
  
  export { useLocalStorage }