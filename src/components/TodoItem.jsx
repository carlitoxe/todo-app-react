import '../style/TodoItem.css'

function TodoItem({completed, text, onCompleted, onDelete, onEdit}) {
    let checked = false;
    if (completed) {
        checked = true;
    }

    return (
        <li className={`${completed && 'completed'}`}>
            <div className="todo-container" onClick={onCompleted}>
                <input className="toggle" type="checkbox" checked={checked}></input>
                <p>{text}</p>
            </div>

            <div className="edit-container" onClick={onEdit}>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="https://www.w3.org/2000/svg"
                    >
                    <path
                        d="M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z" 
                    />
                    <path
                        d="M23.6099 3.5038L20.4961 0.390054C19.9761 -0.130018 19.1293 -0.130018 18.6092 0.390054L16.1689 2.83039L21.1695 7.83108L23.6099 5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z"
                    />
                </svg>
            </div>
            <div className="delete-container" onClick={onDelete}>
                <svg className="delete-icon" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 469.404 469.404" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M310.4,235.083L459.88,85.527c12.545-12.546,12.545-32.972,0-45.671L429.433,9.409c-12.547-12.546-32.971-12.546-45.67,0 L234.282,158.967L85.642,10.327c-12.546-12.546-32.972-12.546-45.67,0L9.524,40.774c-12.546,12.546-12.546,32.972,0,45.671 l148.64,148.639L9.678,383.495c-12.546,12.546-12.546,32.971,0,45.67l30.447,30.447c12.546,12.546,32.972,12.546,45.67,0 l148.487-148.41l148.792,148.793c12.547,12.546,32.973,12.546,45.67,0l30.447-30.447c12.547-12.546,12.547-32.972,0-45.671 L310.4,235.083z"></path> </g> </g></svg>
            </div>
        </li>
    )
}

export { TodoItem };