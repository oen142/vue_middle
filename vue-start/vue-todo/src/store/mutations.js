const addOneItem = (state, todoItem) => {
    const obj = {
        completed: false,
        item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
    console.log(this);
};
const removeOneItem = (state, payload) => {

    localStorage.removeItem(payload.todoItem);
    state.todoItems.splice(payload.index, 1);
    console.log(payload.todoItem, payload.index);
};
const todoCompleteOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export {addOneItem, removeOneItem, todoCompleteOneItem, clearAllItems}
