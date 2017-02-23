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
    ]
}, action) {

    switch (action.type) {
        case "ADD_ITEM": {
            return {...state, todoItems: [...state.todoItems, action.payload]}
        }
        case "REMOVE_ITEM": {
            return {todoItems: state.todoItems.filter(item => item.id !== action.payload)}
        }
    }

    return state;
}
