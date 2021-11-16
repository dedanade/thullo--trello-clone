import { combineReducers } from 'redux';

import boards from './boardsReducer';
import user from './userReducer';

export default combineReducers({
  boards,
  user,
});
