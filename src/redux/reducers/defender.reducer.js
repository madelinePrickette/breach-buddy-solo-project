const defenderReducer = (state = [], action) => {
    switch(action.type) {
        case ('SET_DEFENDER'):
            return action.payload;
        default:
            return state;
    }
}

export default defenderReducer;