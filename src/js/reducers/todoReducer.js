export default function reducer(state={
    todoItems: [
        {
            id: 0,
            description: 'clean up the house'
        },
        {
            id: 1,
            description: 'go out tonight'
        },
        {
            id: 2,
            description: 'empty the bin'
        }
    ],
    idCount: 3
}, action) {

    switch (action.type) {
        case "ADD_ITEM": {
            return {...state, todoItems: [...state.todoItems, action.payload], idCount: state.idCount + 1}
        }
        case "REMOVE_ITEM": {
            return {...state, todoItems: state.todoItems.filter(item => item.id !== action.payload)}
        }
    }

    return state;
}
