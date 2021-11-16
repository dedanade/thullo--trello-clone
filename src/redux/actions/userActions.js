import { getAccountMembers } from '../../services/boards';
import { getUser } from '../../services/user';
import * as actionType from './actionsType';

export function fetchUser() {
  const user = getUser();
  return {
    type: actionType.FETCH_USER,
    payload: user,
  };
}
export function fecthMembers() {
  const members = getAccountMembers();
  return {
    type: actionType.FETCH_MEMBERS,
    payload: members,
  };
}
