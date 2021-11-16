import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewBoard from '../Components/Boards/Board/ViewBoard';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Test View Board', () => {
  const match = { params: { id: 'B001' } };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <ViewBoard match={match} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  });

  const { boards: oldBoards } = store.getState();

  const board = oldBoards.boards.find((b) => {
    return b._id === match.params.id;
  });
  const oldBoardListCardsLength = board.lists[0].cards.length;

  it('Should check if board Lists are visible', () => {
    const viewListsSection = screen.getByTestId(/view-lists-section/i);
    expect(viewListsSection).toBeVisible();
  });
  it('should check the show menu button is working', () => {
    const showMenuBtn = screen.getByText(/show menu/i);
    userEvent.click(showMenuBtn);
    const menuModal = screen.getByTestId('board-menu-modal');
    expect(menuModal).toBeVisible();
  });
  it('should check if the add new member button is working', () => {
    const addMemberBtn = screen.getAllByTestId(/AddIcon/i);
    userEvent.click(addMemberBtn[0]);
    const inviteMemberModal = screen.getByTestId(/invite-member-modal/i);
    expect(inviteMemberModal).toBeVisible();
  });
  it('should check if card modal pops up after click', () => {
    const firstCard = screen.getAllByTestId(/each-list-card/i)[0];
    userEvent.click(firstCard);
    const cardModal = screen.getByTestId('list-card-modal');
    expect(cardModal).toBeVisible();
  });
  it('should check if new cards can be created and stored in the state', () => {
    const firstCreateCardBtn = screen.getAllByTestId('add-new-card-btn')[0];
    const oldCardParentLength = [...firstCreateCardBtn.parentNode.children]
      .length;
    userEvent.click(firstCreateCardBtn);
    const newCardModal = screen.getByTestId('new-card-modal');
    expect(newCardModal).toBeVisible();
    const titleInput = screen.getByPlaceholderText(
      /Enter a title for this Card/i
    );
    const newBtnSave = screen.getByText(/Save/i);
    userEvent.type(titleInput, 'New Card');
    userEvent.click(newBtnSave);
    expect(newCardModal).not.toBeVisible();
    const newCardParentLength = [...firstCreateCardBtn.parentNode.children]
      .length;
    const difference = newCardParentLength - oldCardParentLength;
    const board = oldBoards.boards.find((b) => {
      return b._id === match.params.id;
    });
    const newBoardListCardsLength = board.lists[0].cards.length;
    expect(difference).toBe(1);
    expect(newBoardListCardsLength - oldBoardListCardsLength).toBe(1);
  });
});
