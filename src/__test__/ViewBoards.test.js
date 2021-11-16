import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewBoards from '../Components/Boards/AllBoards/ViewBoards';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Test View Board', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <ViewBoards />
            </Switch>
          </BrowserRouter>
        </Provider>
      );
    });
  });

  // beforeEach(() => {
  // });
  const { boards: oldBoards } = store.getState();

  it('Should Toggle Create new Modal with button click', () => {
    const addNewBoardBtnEl = screen.getByText('Add');
    userEvent.click(addNewBoardBtnEl);
    const createNewBoardModal = screen.getByText(/create/i);
    expect(createNewBoardModal).toBeVisible();
    const closeBtn = screen.getByTestId(/CloseIcon/i);
    userEvent.click(closeBtn);
    expect(createNewBoardModal).not.toBeVisible();
  });

  it(`should Validate if a new board is created after 'create' button click`, async () => {
    const addNewBoardBtnEl = screen.getByText('Add');
    userEvent.click(addNewBoardBtnEl);
    const boardTitleInput = screen.getByPlaceholderText(/Add board title/i);
    const createNewBoardModal = screen.getByText(/create/i);
    userEvent.type(boardTitleInput, 'New Label');
    userEvent.click(createNewBoardModal);
    const { boards: newBoards } = store.getState();
    const difference = newBoards.boards.length - oldBoards.boards.length;
    // console.log(new Date().toISOString());
    expect(difference).toBe(1);
  });
});
