import todoItems from "../consts/basic-todo-list.json";

export default function reducer(state = {...todoItems}, action) {

    switch (action.type) {
        case "ADD_ITEM": {
            action.payload.id = state.idCount;

            return {...state, todoItems: [...state.todoItems, action.payload], idCount: state.idCount + 1}
        }
        case "REMOVE_ITEM": {
            return {...state, todoItems: state.todoItems.filter(item => item.id !== action.payload)}
        }
    }

    return state;
}
