import { combineReducers, createStore } from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import userReducer from './users-reducer';
import authReducer from './auth-reduces';

let reducers = combineReducers({
  profilePage: ProfileReducer,
  dialogPage: DialogsReducer,
  usersPage: userReducer,
  auth: authReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
