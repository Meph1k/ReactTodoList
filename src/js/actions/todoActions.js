export function addNewItem(newItem) {
    return {
        type: 'ADD_ITEM',
        payload: newItem
    }
}
export function removeItem(item) {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}
