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
            console.log('items before: ', state.todoItems);
            state.todoItems.splice(action.payload, 1);
            console.log('items after: ', state.todoItems);

            return {todoItems: [...state.todoItems]}
        }
    }

    return state;
}
