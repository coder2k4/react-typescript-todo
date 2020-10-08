import React from "react";
import {ITodo} from "../interfaces";

interface todosListInterface {
    todos: ITodo[]

    onToggle(id: number): void

    onDelete(id: number): void
}


export const TodosList: React.FC<todosListInterface> = ({todos, onDelete, onToggle}) => {

    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>TODO:</h4></li>
            {todos.map(todo => (
                <li className="collection-item" key={todo.id} onClick={() => onToggle(todo.id)}>
                    <div className={todo.complete ? 'complete' : ""}>{todo.title}
                        <span className="secondary-content">
                            <i className="material-icons" onClick={() => onDelete(todo.id)}>delete</i>
                        </span>
                    </div>
                </li>
            ))}
            <style>
                {`
                .complete {
                    text-decoration: line-through
                    }
                `}
            </style>
        </ul>

    )
}