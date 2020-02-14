export default class StorageLoader {
    key = "todoData";

    getTodoList() {
        if (localStorage.getItem(this.key)) {
            return JSON.parse(localStorage.getItem(this.key));
        }
        localStorage.setItem(this.key, JSON.stringify([]));
        return [];
    }

    updateData(newArray) {
        localStorage.setItem(this.key, JSON.stringify(newArray));
    }
}
