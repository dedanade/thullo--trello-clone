import React from 'react';
import NewCard from '../Modals/NewCard';
import BoardCards from './BoardCards';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import ListOptions from '../Modals/ListOptions';
import { Droppable } from 'react-beautiful-dnd';

function Boardlists({
  board,
  modalToShow,
  handleListNameChange,
  handleShowModal,
  handleDeleteList,
  setCardEdit,
  setModalToShow,
  handleCardNewMember,
  handleNewCardSave,
  handleNewList,
  placeholderProps,
}) {
  return (
    <section data-testid='view-lists-section' className='board-cards__section'>
      <div className='all-board-cards'>
        {board.lists?.map((list, index) => {
          return (
            <Droppable key={list._id} droppableId={list._id}>
              {(provided, snapshot) => (
                <div
                  key={index}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className='board-card'
                >
                  <div className='board-card__header'>
                    {modalToShow.name === 'renameList' &&
                    modalToShow.index === index ? (
                      <input
                        defaultValue={list.name || ''}
                        type='text'
                        className='form-control'
                        onBlur={(e) =>
                          handleListNameChange(list, e.currentTarget.value)
                        }
                      />
                    ) : (
                      <span className='board-card__header_text'>
                        {list.name}
                      </span>
                    )}
                    <div className='list-options_rename_delete'>
                      <span
                        onClick={() => handleShowModal('listOption', index)}
                        className='board-card__option__svg'
                      >
                        <MoreHorizIcon />
                      </span>
                      {modalToShow.name === 'listOption' &&
                        modalToShow.index === index && (
                          <ListOptions
                            handleShowModal={handleShowModal}
                            handleDeleteList={handleDeleteList}
                            index={index}
                            list={list}
                            setModalToShow={setModalToShow}
                          />
                        )}
                    </div>
                  </div>
                  <BoardCards
                    board={board}
                    list={list}
                    setCardEdit={setCardEdit}
                    setModalToShow={setModalToShow}
                    modalToShow={modalToShow}
                    handleShowModal={handleShowModal}
                    onNewMember={handleCardNewMember}
                  />

                  {provided.placeholder}
                  {Object.keys(placeholderProps).length &&
                    snapshot.isDraggingOver && (
                      <div
                        className='placeholder'
                        style={{
                          top: placeholderProps.clientY,
                          left: placeholderProps.clientX,
                          height: placeholderProps.clientHeight,
                          width: placeholderProps.clientWidth,
                        }}
                      />
                    )}
                  {modalToShow.name === 'showNewCard' &&
                    modalToShow.index === index && (
                      <NewCard
                        onNewCardSave={handleNewCardSave}
                        setModaltoShow={setModalToShow}
                        objToSave={list}
                      />
                    )}
                  <button
                    data-testid='add-new-card-btn'
                    onClick={() => handleShowModal('showNewCard', index)}
                    className='btn add-another__span'
                  >
                    <span>Add another card</span>
                    <AddIcon />
                  </button>
                </div>
              )}
            </Droppable>
          );
        })}
        {modalToShow.name === 'showNewListCard' && (
          <NewCard
            onNewCardSave={handleNewList}
            type={'List'}
            setModaltoShow={setModalToShow}
          />
        )}
        <button
          onClick={() => handleShowModal('showNewListCard')}
          className='btn add-another__span'
        >
          <span>Add another List</span>
          <AddIcon />
        </button>
      </div>
    </section>
  );
}

export default Boardlists;
