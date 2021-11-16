import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { fetchBoards } from './actions/boardActions';
import { fetchUser, fecthMembers } from './actions/userActions';
// import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

store.dispatch(fetchUser());
store.dispatch(fetchBoards());
store.dispatch(fecthMembers());

// console.log(store);
export default store;
