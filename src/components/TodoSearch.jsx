import React, { useContext, useState } from "react";
import '../style/TodoSearch.css'

function TodoSearch({ setSearchValue, searchValue }) {

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