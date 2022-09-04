const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            console.log(action.payload);
            return action.payload;
    }
    return state;
}

export default messageReducer;