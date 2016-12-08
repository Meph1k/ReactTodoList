export function saveLastStep(lastStepNumber) {
    return {
        type: 'SAVE_LAST_STEP',
        payload: lastStepNumber
    }
}
export function saveGender(gender) {
    return {
        type: 'SAVE_GENDER',
        payload: gender
    }
}
export function saveRace(race) {
    return {
        type: 'SAVE_RACE',
        payload: race
    }
}
export function saveClass(classOfACharacter) {
    return {
        type: 'SAVE_CLASS',
        payload: classOfACharacter
    }
}
