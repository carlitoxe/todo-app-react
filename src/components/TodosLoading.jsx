import React from "react";
import '../style/TodosLoading.css'

function TodosLoading() {
    return (
        <div className="loadingtodo-container">
            <span className="loadingtodo-completeicon"></span>
            <p className="loadingtodo-text">Loading TODOs...</p>
            <span className="loadingtodo-deleteicon"></span>
        </div>
    );
}

export { TodosLoading };