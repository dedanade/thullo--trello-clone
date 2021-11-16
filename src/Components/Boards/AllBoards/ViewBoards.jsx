import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CreateBoardModal from './CreateBoardModal';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Nav from '../../Nav/Nav';

function ViewBoards(props) {
  const boards = useSelector((state) => state.boards.boards);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const [showCreateModal, setShowCreateModal] = useState();

  return (
    <>
      <Nav />
      <main className='all-boards-container'>
        <section className='all-boards__title-btn'>
          <p className='all-boards__title'>All Boards</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className='btn btn-primary all-boards__btn btn_svg__flex'
          >
            <AddIcon />
            <span>Add</span>
          </button>
        </section>
        <section className='all-boards'>
          <div className='card-container'>
            {boards.map((board, index) => {
              return (
                <div key={index} className='card'>
                  <div className='card-body'>
                    <div
                      onClick={() =>
                        history.push(`/board/${board.title}/${board._id}`)
                      }
                      className='boards-card-content'
                    >
                      <div className='board-card__img'>
                        <img src={board.cover} alt='' className='img-cover' />
                      </div>
                      <p className='board-name__header'>{board.title}</p>
                      <div className='board-members'>
                        <div className='all-board-members_card'>
                          {board.members.slice(0, 3).map((member, index) => {
                            return (
                              <div key={index} className='board-member__img'>
                                <img
                                  src={member.avatar}
                                  alt=''
                                  className='img-cover'
                                />
                              </div>
                            );
                          })}
                          {board.members.slice(2, -1).length > 0 && (
                            <p className='board-members__p'>
                              {`+ ${board.members.slice(2, -1).length} others`}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {showCreateModal && (
          <div className='modal'>
            <CreateBoardModal
              setShowCreateModal={setShowCreateModal}
              user={user}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default ViewBoards;
