const attackerReducer = (state = [], action) => {
    switch(action.type) {
        case ('SET_ATTACKER'):
            return action.payload;
        default:
            return state;
    }
}

export default attackerReducer;