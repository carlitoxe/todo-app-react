import React from "react";
import '../style/TodoList.css';

function TodoList({children}) {
    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export { TodoList };