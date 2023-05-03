import React, { createContext, useState } from "react";
import { useLocalStorage } from "./UseLocalStorage";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

function TodoProvider(props) {
    const { 
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error 
      } = useLocalStorage('TODOS_V1', [])
      
      const [openModal, setOpenModal] = useState(false);

      const [searchValue, setSearchValue] = useState('');
      const countTodos = todos.length;
      const completedTodos = todos.filter(todo => todo.completed).length;
    
      let searchedTodos = []
    
      if (!searchValue >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
      }

      const addTodo = text => {
        const todosUpdate = [...todos];
          todosUpdate.push({
            id: uuidv4(),
            text,
            completed: false,
          });
          saveTodos(todosUpdate);
      };

      const completeTodo = id => {
        const todosUpdate = todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed 
          }
          return todo;
          })
        saveTodos(todosUpdate);
      };
      
      const deleteTodo = id => {
        const todosUpdate = todos.filter(todo => todo.id !== id);
        saveTodos(todosUpdate);
    }
  
    /*   function deleteTodo(text){
        const todosUpdate = todos.filter(todo=>todo.text !== text)
        setTodos(todosUpdate)
      } */
    

       /*  const onCompleted = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const todosUpdate = [...todos];
    todosUpdate[todoIndex].completed = !todosUpdate[todoIndex].completed
    setTodos(todosUpdate)
  } */

    return (
        <TodoContext.Provider value={{
            loading, 
            error,
            countTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

