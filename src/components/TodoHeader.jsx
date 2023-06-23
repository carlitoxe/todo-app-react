import React from "react";
import { cloneElement } from "react";

function TodoHeader({ children, loading }) {

    return (
        <header>
            {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
        </header>
    )
}

export { TodoHeader }