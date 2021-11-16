import * as actionType from '../actions/actionsType';

const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_MEMBERS: {
      return { ...state, members: action.payload };
    }
    case actionType.FETCH_USER: {
      return { ...state, user: action.payload };
    }
    default:
  }
  return state;
}
