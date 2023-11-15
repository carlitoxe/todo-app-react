import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
    const {
      synchronizeItem,
      loading,
      error,
      item
    } = state;

 /*    const [synchronizeItem, setSynchronizeItem] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue); */

    // ACTION CREATORS
    const onError = (error) => dispatch({ 
      type: actionTypes.error, 
      payload: error 
    })

    const onSuccess = (item) => dispatch({ 
      type: actionTypes.success, 
      payload: item 
    })
    
    const onSave = (item) => dispatch({ 
      type: actionTypes.save, 
      payload: item 
    })

    const onSynchronize = () => dispatch({
      type: actionTypes.synchronize,
    })

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
          
          onSuccess(parsedItem)
/*           setItem(parsedItem);
          setLoading(false);
          setSynchronizeItem(true); */
        } catch(error) {
          onError(error);
        }
      }, 500)
    }, [synchronizeItem]);
  
  
    const saveItem = itemUpdate => {
      try {
        const stringifiedItem = JSON.stringify(itemUpdate);
        localStorage.setItem(itemName, stringifiedItem);
        onSave(itemUpdate);
        //setItem(itemUpdate);
      } catch (error) {
        onError(error);
        //setError(error);
      }
    }

    const synchronizerItem = () => {
      onSynchronize();
/*       setLoading(true);
      setSynchronizeItem(false); */
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      synchronizerItem
    }
  }

  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    synchronize: 'SYNCHRONIZE'
  }

  const initialState = ({ initialValue }) => ({
    synchronizeItem: true,
    error: false,
    loading: true,
    item: initialValue
  })

  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
      error: true,
    },
    [actionTypes.success]: {
      ...state,
      error: false,
      loading: false,
      synchronizeItem: true,
      item: payload,
    },
    [actionTypes.save]: {
      ...state,
      item: payload,
    },
    [actionTypes.synchronize]: {
      ...state,
      synchronizeItem: false,
      loading: true,
    }
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  }
  
  export { useLocalStorage }