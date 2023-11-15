import { useNavigate } from "react-router-dom";
import { useTodos } from "../../hooks/useTodos";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodoForm } from "../../components/TodoForm";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { Modal } from "../../components/Modal";
import { TodosError } from "../../components/TodosError";
import { TodosLoading } from "../../components/TodosLoading";
import { EmptyTodos } from "../../components/EmptyTodos";
import { ChangeAlert } from '../../components/ChangeAlert';
import logo from "../../assets/logo.png"

function HomePage() {
  const navigate = useNavigate();

  const {
    state, 
    stateUpdaters
  } = useTodos()

const {
  error, 
  loading, 
  searchedTodos, 
  countTodos,
  completedTodos,
  openModal,
  searchValue,
} = state;

const {
  setOpenModal,
  addTodo,
  completeTodo, 
  deleteTodo,
  setSearchValue,
  synchronizeTodos,
} = stateUpdaters;

return (    
  <>
            <div className="header">
            <a href="/todo-app-react/">
              <h1>ToDo App</h1><img src={logo} className="logo" alt="logo"></img>
            </a>
        </div>
    <TodoHeader loading={loading}>
        <TodoCounter 
            countTodos={countTodos} 
            completedTodos={completedTodos}
            // loading={loading} 
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            // loading={loading} 
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
        onEdit={() => navigate(`edit/${todo.id}`, { state: { todo } })} 
        onDelete={() => deleteTodo(todo.id)}
      />
      )}
    </TodoList>

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

<ChangeAlert synchronize={synchronizeTodos} />

    <CreateTodoButton
      //setOpenModal={setOpenModal}
    />

    
  </>);
}

export { HomePage };
