import { connect } from "react-redux";
import React from "react";
// componetns
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";
import { onTermChanged, setFilter, onAppSuccess } from "../../action";
// --------------

class App extends React.Component {
    componentDidMount() {
        this.props.onAppSuccess();
    }

    render() {
        const {
            todoData,
            filterPrope,
            onSearch,
            setFilter,
            shownData
        } = this.props;

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={onSearch} />
                    <ItemStatusFilter
                        setFilter={setFilter}
                        filter={filterPrope}
                    />
                </div>
                <TodoList todo={shownData} />
                <ItemAddForm />
            </div>
        );
    }
}

const mapStateToProps = ({ todoData, filterPrope, term, shownData }) => {
    return { todoData, filterPrope, term, shownData };
};

const mapDispatchToProps = {
    onSearch: onTermChanged,
    setFilter,
    onAppSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
