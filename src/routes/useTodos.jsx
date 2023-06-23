import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

function useTodos() {
    const { 
        item: todos, 
        saveItem: saveTodos,
        synchronizerItem: synchronizeTodos, 
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

      const getTodo = id => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        return todos[todoIndex];
      }    
      
      
      const completeTodo = id => {
        const todosUpdate = todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed 
          }
          return todo;
          })
          saveTodos(todosUpdate);
        };

        const editTodo = (id, text) => {
          const todosUpdate = todos.map(todo => {
            if (todo.id === id) {
              todo.text = text;
            }
            return todo;
            })
          saveTodos(todosUpdate); 
        }
        
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

  const state = {
    loading, 
    error,
    countTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    getTodo,
  }

    const stateUpdaters = {
      setSearchValue,
      addTodo,
      completeTodo,
      editTodo,
      deleteTodo,
      setOpenModal,
      synchronizeTodos,
    }

    return { state, stateUpdaters }
}

export { useTodos }

