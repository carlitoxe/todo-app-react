import React, { useContext, useState } from "react";
import '../style/TodoSearch.css'
import { TodoContext } from "./TodoContext";

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext)

    const onSearchValue = event => {
        setSearchValue(event.target.value);
    }
    return (
        <>
            <input 
                type="text" 
                placeholder="Search ToDo" 
                className="TodoSearch"
                value={searchValue} 
                onChange={onSearchValue}
            />
        </>
    )
}

export { TodoSearch } 