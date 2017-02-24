export function addNewItem(newItem) {
    return {
        type: 'ADD_ITEM',
        payload: newItem
    }
}
export function removeItem(itemId) {
    return {
        type: 'REMOVE_ITEM',
        payload: itemId
    }
}
