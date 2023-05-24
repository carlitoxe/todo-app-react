import React from "react"
import { useTodos } from "./UseTodos";
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

  /* const defaultTodos = [
    { id: uuidv4(), text: 'Cut the onion', completed: false },
    { id: uuidv4(), text: 'dsfsdfdsfsdfsfsdfdsfdsfsfdsfdsdsdsfdsfdsfsffs', completed: true },
    { id: uuidv4(), text: 'Cut the potato', completed: false },
    { id: uuidv4(), text: 'Hello World', completed: false }
] */


function App() {
  const {
    loading, 
    error, 
    countTodos,
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,  
} = useTodos()

return (    
  <>
    <TodoHeader>
        <div className="header">
            <a href="/todo-app-react/">
              <h1>ToDo App</h1><img src={logo} className="logo" alt="logo"></img>
            </a>
        </div>
        <TodoCounter 
            countTodos={countTodos} 
            completedTodos={completedTodos} 
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      countTodos={countTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      onError={() => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults = {(searchValue) => <p className='empty-results'>There is no coincidences for: {searchValue}</p>}

/*       render={todo => (
        <TodoItem 
          key={todo.id} 
          id={todo.id} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.id)} 
          onDelete={() => deleteTodo(todo.id)}
        />
        )} */
    >  

  {todo => (
      <TodoItem 
        key={todo.id} 
        id={todo.id} 
        text={todo.text} 
        completed={todo.completed}
        onCompleted={() => completeTodo(todo.id)} 
        onDelete={() => deleteTodo(todo.id)}
      />
      )}
    </ TodoList>


 {/*    <TodoList>
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
    </TodoList> */}
    
    {openModal && (
    <Modal>
      <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
    </Modal>
    )}

    <CreateTodoButton
      setOpenModal={setOpenModal}
    />

    
  </>);
}

export default App
