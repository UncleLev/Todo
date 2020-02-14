import StorageLoader from "../servise/storage";

const initialState = {
    todoData: [],
    filterPrope: "all",
    term: "",
    shownData: []
};

const Service = new StorageLoader();

const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
};

const Filter = (items, filter) => {
    switch (filter) {
        case "all":
            return items;
        case "active":
            return items.filter((el) => !el.done);
        case "done":
            return items.filter((el) => el.done);
        default:
            return items;
    }
};

const search = (items, term) => {
    if (term.length === 0) {
        return items;
    }
    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "COMPONENT_SUCCESS": {
            const todoData = Service.getTodoList();
            return {
                ...state,
                todoData,
                shownData: todoData
            };
        }

        case "ADDING_ITEM": {
            const newItem = {
                label: action.payload,
                important: false,
                done: false,
                id: Date.now()
            };
            const newArray = [...state.todoData, newItem];
            Service.updateData(newArray);

            return {
                ...state,
                todoData: newArray,
                shownData: newArray
            };
        }

        case "DELITING_ITEM": {
            const { todoData } = state;
            const id = action.payload;
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            Service.updateData(newArray);
            return {
                ...state,
                todoData: newArray,
                shownData: newArray
            };
        }

        case "TOGGLE_IMPOTENT": {
            const id = action.payload;
            const todoData = toggleProperty(state.todoData, id, "important");
            Service.updateData(todoData);
            return {
                ...state,
                todoData,
                shownData: todoData
            };
        }

        case "TOGGLE_DONE": {
            const id = action.payload;
            const todoData = toggleProperty(state.todoData, id, "done");
            Service.updateData(todoData);
            return {
                ...state,
                todoData,
                shownData: todoData
            };
        }

        case "CHANGING_TERM": {
            const term = action.payload;
            return {
                ...state,
                term
            };
        }

        case "SETTING_FILTER": {
            const filterPrope = action.payload;

            return {
                ...state,
                filterPrope,
                shownData: Filter(
                    search(state.todoData, state.term),
                    filterPrope
                )
            };
        }

        default:
            return state;
    }
};

export default reducer;
