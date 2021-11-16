import React from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InviteMember from '../Modals/InviteMember';
import AddIcon from '@mui/icons-material/Add';
import { Draggable } from 'react-beautiful-dnd';

function BoardCards({
  board,
  list,
  setCardEdit,
  setModalToShow,
  modalToShow,
  handleShowModal,
  onNewMember,
}) {
  return (
    <>
      {/* <span className='board-view-bg__span'></span> */}

      {list.cards?.map((card, index) => {
        return (
          <Draggable key={card._id} draggableId={card._id} index={index}>
            {(provided) => (
              <div
                key={index}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className='card board-view-card'
              >
                <div className='card-body'>
                  {card.cover?.length ? (
                    <div
                      onClick={() => [
                        setCardEdit({ list, card, board, show: true }),
                        setModalToShow({}),
                      ]}
                      className='board-card__img pointer'
                    >
                      <img src={card.cover} alt='' className='img-cover' />
                    </div>
                  ) : null}
                  <p
                    data-testid='each-list-card'
                    onClick={() =>
                      setCardEdit({ list, card, board, show: true })
                    }
                    className='board-card__title pointer'
                  >
                    {card.title}
                  </p>
                  <div className='board-card__label'>
                    {card.labels?.map((label, index) => {
                      return (
                        <span
                          key={index}
                          style={{
                            '--labelBackGroundColor': label.background,
                            '--labelColor': label.color,
                          }}
                          className='board-card__label_each'
                        >
                          {label.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className='board-card__members-comments'>
                    <div className='all-board-members_card'>
                      {card.members?.map((member, index) => {
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
                      <div className='add-member__btn'>
                        <button
                          onClick={() => handleShowModal(list._id, index)}
                          className='btn btn-primary btn-icon__flex'
                        >
                          <AddIcon />
                        </button>
                        {modalToShow.name === list._id &&
                          modalToShow.index === index && (
                            <InviteMember
                              availableMembers={board.members}
                              existingMembers={card.members}
                              onNewMember={onNewMember}
                              list={list}
                              card={card}
                              setModalToShow={setModalToShow}
                            />
                          )}
                      </div>
                    </div>
                    <div className='board-card__comments-link'>
                      <span className='board-card__comment_text'>
                        <CommentIcon />{' '}
                        <small>{card.comments?.length || 0}</small>
                      </span>
                      <span className='board-card__comment_text'>
                        <AttachFileIcon />{' '}
                        <small>{card.attachments?.length || 0}</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Draggable>
        );
      })}
    </>
  );
}

export default BoardCards;
