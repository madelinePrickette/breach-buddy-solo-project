import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import messageReducer from './message.reducer';
import profileReducer from './profile.reducer';
import attackerReducer from './attacker.reducer';
import defenderReducer from './defender.reducer';
import friendsReducer from './friends.reducer';
import otherUserReducer from './Other.user.reducer.js';
import allUsersReducer from './all.users.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  messageReducer,
  profileReducer,
  attackerReducer,
  defenderReducer,
  friendsReducer,
  otherUserReducer,
  allUsersReducer,
});

export default rootReducer;
