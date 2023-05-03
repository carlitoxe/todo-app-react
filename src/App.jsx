import React, { useEffect, useState } from "react"
import { TodoProvider } from "./components/TodoContext";
import { AppUI } from "./AppUI";

  /* const defaultTodos = [
    { id: uuidv4(), text: 'Cut the onion', completed: false },
    { id: uuidv4(), text: 'dsfsdfdsfsdfsfsdfdsfdsfsfdsfdsdsdsfdsfdsfsffs', completed: true },
    { id: uuidv4(), text: 'Cut the potato', completed: false },
    { id: uuidv4(), text: 'Hello World', completed: false }
] */


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
