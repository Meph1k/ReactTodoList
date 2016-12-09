export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
    lastStep: 0,
    gender: null,
    race: null,
    abilitiesPoints: 0,
    abilities: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    }
}, action) {

    switch (action.type) {
        case "SAVE_LAST_STEP": {
            return {...state, fetching: true, lastStep: action.payload}
        }
        case "SAVE_GENDER": {
            return {...state, fetching: true, gender: action.payload}
        }
        case "SAVE_RACE": {
            return {...state, fetching: true, race: action.payload}
        }
        case "SAVE_CLASS": {
            return {...state, fetching: true, class: action.payload}
        }
        case "SAVE_ALIGNMENT": {
            return {...state, fetching: true, alignment: action.payload}
        }
        case "SAVE_ABILITIES_POINTS": {
            return {...state, fetching: true, abilitiesPoints: action.payload}
        }
        case "SAVE_ABILITIES": {
            return {...state, fetching: true, abilities: action.payload}
        }
    }

    return state;
}
