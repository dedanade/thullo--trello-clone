import * as actionsType from './actionsType';
import { getBoards } from '../../services/boards';
import generateId from '../../services/generateId';

export function fetchBoards() {
  const boards = getBoards();
  return {
    type: actionsType.FETCH_BOARDS,
    payload: boards,
  };
}
export function newBoardAction(dispatchBoard) {
  const board = {
    ...dispatchBoard,
    _id: generateId(),
    lists: [
      { _id: generateId(), name: 'Backlog 🤔', cards: [] },
      { _id: generateId(), name: 'In Progress 📚', cards: [] },
      { _id: generateId(), name: 'In Review ⚙️', cards: [] },
      { _id: generateId(), name: 'Completed 🙌🏽', cards: [] },
    ],
  };
  return {
    type: actionsType.ADD_NEW_BOARD,
    payload: board,
  };
}
export function updateBoardsAction(boards) {
  // console.log(boards);
  return {
    type: actionsType.UPDATE_BOARDS,
    payload: boards,
  };
}
