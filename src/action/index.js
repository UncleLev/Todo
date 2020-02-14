const onAddingItem = (lable) => {
    return {
        type: "ADDING_ITEM",
        payload: lable
    };
};

const onDeletingItem = (id) => {
    return {
        type: "DELITING_ITEM",
        payload: id
    };
};

const onToggleImportant = (id) => {
    return {
        type: "TOGGLE_IMPOTENT",
        payload: id
    };
};

const onToggleDone = (id) => {
    return {
        type: "TOGGLE_DONE",
        payload: id
    };
};

const onTermChanged = (term) => {
    return {
        type: "CHANGING_TERM",
        payload: term
    };
};

const setFilter = (filter) => {
    return {
        type: "SETTING_FILTER",
        payload: filter
    };
};

const onAppSuccess = () => {
    return {
        type: "COMPONENT_SUCCESS"
    };
};
export {
    onAddingItem,
    onDeletingItem,
    onToggleImportant,
    onToggleDone,
    onTermChanged,
    setFilter,
    onAppSuccess
};
