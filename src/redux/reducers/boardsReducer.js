import * as actionType from '../actions/actionsType';

const initialState = {
  boards: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_BOARDS: {
      return { ...state, boards: action.payload };
    }

    case actionType.UPDATE_BOARDS: {
      return {
        ...state,
        boards: action.payload,
      };
    }
    case actionType.ADD_NEW_BOARD: {
      return { ...state, boards: [...state.boards, action.payload] };
    }
    case actionType.ADD_NEW_CARD: {
      const newBoards = { ...state.boards };
      const boardIndex = newBoards.indexOf(action.payload.board);
      const listIndex = newBoards[boardIndex].boardCards.indexOf(
        action.payload.list
      );
      const cards = newBoards[boardIndex].lists[listIndex].cards;
      newBoards[boardIndex].boardCards[listIndex].cards = [
        ...cards,
        action.payload.card,
      ];
      return {
        ...state,
        boards: [...state.boards, newBoards],
      };
    }
    default:
  }
  return state;
}
