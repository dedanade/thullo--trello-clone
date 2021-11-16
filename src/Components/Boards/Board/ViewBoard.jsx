/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CardModal from '../Modals/CardModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoardsAction } from '../../../redux/actions/boardActions';
import { useHistory } from 'react-router';
import generateId from '../../../services/generateId';
import Boardlists from './Boardlists';
import ViewBoardHeader from './ViewBoardHeader';
import { DragDropContext } from 'react-beautiful-dnd';
import Nav from '../../Nav/Nav';

function ViewBoard(props) {
  const { id } = props.match.params;
  const boards = useSelector((state) => state.boards.boards);
  const user = useSelector((state) => state.user.user);
  const allMembers = useSelector((state) => state.user.members);

  const [modalToShow, setModalToShow] = useState({});
  const [board, setBoard] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [cardEdit, setCardEdit] = useState({});

  const [placeholderProps, setPlaceholderProps] = useState({});

  const queryAttr = 'data-rbd-drag-handle-draggable-id';
  const DestinationQuertAttr = 'data-rbd-droppable-id';

  useEffect(() => {
    const board = boards.find((b) => {
      return b._id === id;
    });
    if (!board) history.push('/');
    setBoard(board);
  }, []);

  const handleShowModal = (name, index) => {
    if (index >= 0) {
      if (modalToShow?.name === name && modalToShow.index === index) {
        setModalToShow({});
      } else {
        setModalToShow({ name, index });
      }
    } else {
      if (modalToShow?.name === name) {
        setModalToShow({});
      } else {
        setModalToShow({ name });
      }
    }
  };

  const updateBoardsSpread = (type, result) => {
    const newBoards = [...boards];
    const boardIndex = newBoards.indexOf(board);
    newBoards[boardIndex][type] = result;
    dispatch(updateBoardsAction(newBoards));
  };
  const updateListsSpread = (type, list, result) => {
    const newBoards = [...boards];
    const boardIndex = newBoards.indexOf(board);
    const listIndex = newBoards[boardIndex].lists.indexOf(list);
    newBoards[boardIndex].lists[listIndex][type] = result;
    dispatch(updateBoardsAction(newBoards));
  };
  const updateCardsSpread = (type, result, list, card) => {
    const newBoards = [...boards];
    const boardIndex = newBoards.indexOf(board);
    const listIndex = board.lists.indexOf(list);
    const cardIndex = list.cards.indexOf(card);
    newBoards[boardIndex].lists[listIndex].cards[cardIndex][type] = result;
    dispatch(updateBoardsAction(newBoards));
  };

  const handleNewMember = (member) => {
    const newMembers = [...board.members, member];
    updateBoardsSpread('members', newMembers);
  };

  const handlePrivacyChange = (privacy) => {
    updateBoardsSpread('privacy', privacy);
    setModalToShow({});
  };

  const handleSaveDescription = (description) => {
    updateBoardsSpread('description', description);
    setModalToShow({});
  };
  const handleRemoveMember = (member) => {
    const newMembers = board.members.filter((mem) => {
      return mem !== member;
    });
    updateBoardsSpread('members', newMembers);
  };

  const handleDeleteList = (list) => {
    const oldLists = [...board.lists];
    const newLists = oldLists.filter((l) => {
      return l !== list;
    });
    updateBoardsSpread('lists', newLists);
    setModalToShow({});
  };
  const handleNewList = (name) => {
    const oldLists = [...board.lists];
    const list = { _id: generateId(), name, cards: [] };
    const newLists = [...oldLists, list];
    updateBoardsSpread('lists', newLists);
    setModalToShow({});
  };

  const handleListNameChange = (list, name) => {
    updateListsSpread('name', list, name);
    setModalToShow({});
  };
  const handleNewCardSave = (title, list) => {
    const oldCards = list.cards;
    const card = { _id: generateId(), title, members: [user] };
    let newCards;
    if (oldCards) {
      newCards = [...oldCards, card];
    } else {
      newCards = [card];
    }
    updateListsSpread('cards', list, newCards);
    setModalToShow({});
  };

  const handleCardDescription = (description, list, card) => {
    updateCardsSpread('description', description, list, card);
    setModalToShow({});
  };

  const handleCardNewMember = (member, list, card) => {
    const newMembers = [...card.members, member];
    updateCardsSpread('members', newMembers, list, card);
  };
  const handleCardNewLabel = (label, list, card) => {
    const oldLabels = card.labels;
    let newLabels;
    if (oldLabels) {
      newLabels = [...oldLabels, label];
    } else {
      newLabels = [label];
    }
    updateCardsSpread('labels', newLabels, list, card);
  };
  const handleCardNewComment = (comment, list, card) => {
    const oldComments = card.comments;
    let newComments;
    if (oldComments) {
      newComments = [...oldComments, comment];
    } else {
      newComments = [comment];
    }
    updateCardsSpread('comments', newComments, list, card);
  };
  const handleCardCover = (cover, list, card) => {
    updateCardsSpread('cover', cover, list, card);
    setModalToShow({});
  };

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceList = board.lists.find((l) => {
      return l._id === source.droppableId;
    });

    const destinationList = board.lists.find((l) => {
      return l._id === destination.droppableId;
    });
    const draggedCard = sourceList.cards.find((c) => {
      return c._id === draggableId;
    });

    const newSourceListCards = sourceList.cards;
    const newDestinationListCards = destinationList.cards;
    newSourceListCards.splice(source.index, 1);
    newDestinationListCards.splice(destination.index, 0, draggedCard);

    updateListsSpread('cards', destinationList, newDestinationListCards);
    updateListsSpread('cards', sourceList, newSourceListCards);
  };

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);
    return draggedDOM;
  };
  const getDestinationDom = (dropabbleId) => {
    const domQuery = `[${DestinationQuertAttr}='${dropabbleId}']`;
    const destinationDOm = document.querySelector(domQuery);
    return destinationDOm;
  };

  const handleDragStart = (event) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, sourceIndex + 1)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);
    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };
  const handleDragUpdate = (event) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index + 1;
    const sourceIndex = event.source.index + 1;
    const childrenArray = [...draggedDOM.parentNode.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);
    const droppedDom = getDestinationDom(event.destination.droppableId);
    const desChildreenArray = [...droppedDom.children];
    let updatedArray;
    if (draggedDOM.parentNode === droppedDom) {
      updatedArray = [
        ...childrenArray.slice(0, destinationIndex),
        movedItem,
        ...childrenArray.slice(destinationIndex + 1),
      ];
    } else {
      updatedArray = [
        ...desChildreenArray.slice(0, destinationIndex),
        movedItem,
        ...desChildreenArray.slice(destinationIndex + 1),
      ];
    }

    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0);
    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  if (!board) return <p>Loading</p>;
  return (
    <>
      <Nav boarddName={board.title} />
      <main className='view-board'>
        <ViewBoardHeader
          handleShowModal={handleShowModal}
          board={board}
          user={user}
          modalToShow={modalToShow}
          setModalToShow={setModalToShow}
          handlePrivacyChange={handlePrivacyChange}
          allMembers={allMembers}
          handleNewMember={handleNewMember}
          handleSaveDescription={handleSaveDescription}
          handleRemoveMember={handleRemoveMember}
        />
        <DragDropContext
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDragUpdate={handleDragUpdate}
        >
          <Boardlists
            board={board}
            modalToShow={modalToShow}
            handleListNameChange={handleListNameChange}
            handleShowModal={handleShowModal}
            handleDeleteList={handleDeleteList}
            setCardEdit={setCardEdit}
            setModalToShow={setModalToShow}
            handleCardNewMember={handleCardNewMember}
            handleNewCardSave={handleNewCardSave}
            handleNewList={handleNewList}
            placeholderProps={placeholderProps}
          />
        </DragDropContext>
        {cardEdit.show && (
          <div className='view-board-card-modal modal'>
            <CardModal
              cardEdit={cardEdit}
              setCardEdit={setCardEdit}
              modalToShow={modalToShow}
              setModalToShow={setModalToShow}
              handleShowModal={handleShowModal}
              user={user}
              onSaveDescription={handleCardDescription}
              onNewMember={handleCardNewMember}
              onNewCover={handleCardCover}
              onNewlabel={handleCardNewLabel}
              onNewComment={handleCardNewComment}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default ViewBoard;
