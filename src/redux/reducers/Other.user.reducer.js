const otherUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_OTHER_PROFILE':
      return action.payload;
    default:
      return state;
  }
};
  
  // user will be on the redux state at:
  // state.user
export default otherUserReducer;