import React, { useContext } from "react";
import { TodoContext } from "./components/TodoContext";
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./components/Modal";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos";
import logo from "./assets/logo.png"


function AppUI() {
    const {
        loading, 
        error, 
        countTodos,
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,  
    } = useContext(TodoContext)

    return (    
    <>
      <TodoHeader>
          <div className="header">
              <h1>ToDo App</h1><img src={logo} className="logo" alt="logo"></img>
          </div>
          <TodoCounter 
              totalTodos={totalTodos} 
              completedTodos={completedTodos} 
          />
          <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
      </TodoHeader>
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !countTodos) && <EmptyTodos />}
            
        { searchedTodos.map(todo => (
        <TodoItem 
          key={todo.id} 
          id={todo.id} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.id)} 
          onDelete={() => deleteTodo(todo.id)}
        />
        )) }
      </TodoList>
      
      {openModal && (
      <Modal setOpenModal={setOpenModal}>
        <TodoForm />
      </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      
    </>);
}

export { AppUI }