import React from "react";
import '../style/TodoList.css';

function TodoList(props) {
    return (
        <section className="todolist-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.countTodos) && props.onEmptyTodos()}

            {props.searchedTodos.map(props.render)}
            {/* {searchedTodos.map(todo => props.render(todo))} */}

            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };