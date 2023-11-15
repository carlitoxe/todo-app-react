import '../style/TodoList.css';

function TodoList(props) {
    const renderFunc = props.children || props.render;

    return (
        <section className="todolist-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.countTodos) && props.onEmptyTodos()}

            {(!!props.countTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
            {/* {searchedTodos.map(todo => props.render(todo))} */}

            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };