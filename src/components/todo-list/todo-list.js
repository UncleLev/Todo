import React from "react";
import { connect } from "react-redux";
import { onDeletingItem, onToggleImportant, onToggleDone } from "../../action";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({
    todo,
    onDeletingItem,
    onToggleImportant,
    onToggleDone
}) => {
    const element = todo.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem
                    {...itemProps}
                    onDelete={() => onDeletingItem(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });

    if (todo.length === 0) {
        return (
            <div className="list-empty">
                <p>You have nothing to do</p>
            </div>
        );
    }

    return <ul className="list-group todo-list">{element}</ul>;
};

// const mapStateToProps = ({ todoData }) => {
//     return { todo: todoData };
// };

const mapDispatchToProps = {
    onDeletingItem,
    onToggleImportant,
    onToggleDone
};

export default connect(null, mapDispatchToProps)(TodoList);
