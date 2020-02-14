import React from "react";
import "./todo-list-item.css";

const TodoListItem = (props) => {
    const {
        label,
        onDelete,
        onToggleDone,
        onToggleImportant,
        important,
        done
    } = props;

    let className = "todo-list-item";

    if (done) {
        className += " done";
    }

    if (important) {
        className += " important";
    }

    return (
        <div className={className}>
            <button
                className="btn btn-outline-success btn-sm"
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation"></i>
            </button>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={onDelete}
            >
                <i className="fa fa-trash-o"></i>
            </button>

            <span className="todo-list-item-label" onClick={onToggleDone}>
                {label}
            </span>
        </div>
    );
};

export default TodoListItem;
