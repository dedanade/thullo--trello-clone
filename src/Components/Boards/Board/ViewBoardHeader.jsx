import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityModal from '../Modals/VisibilityModal';
import InviteMember from '../Modals/InviteMember';
import BoardMenu from '../Modals/BoardMenu';
import LockIcon from '@mui/icons-material/Lock';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ViewBoardHeader({
  handleShowModal,
  board,
  user,
  modalToShow,
  setModalToShow,
  handlePrivacyChange,
  allMembers,
  handleNewMember,
  handleSaveDescription,
  handleRemoveMember,
}) {
  return (
    <section className='view-board__header'>
      <div className='view-board__option_one'>
        <div className='visibility__con'>
          <button
            onClick={() => {
              handleShowModal('visibilityModal');
            }}
            className='btn btn-gray btn_svg__flex'
          >
            {board.privacy === 'Public' ? <PublicIcon /> : <LockIcon />}
            <span>{board.privacy || 'Private'}</span>
          </button>
          {modalToShow?.name === 'visibilityModal' && (
            <VisibilityModal
              handleCloseModal={() => setModalToShow({})}
              handlePrivacyChange={handlePrivacyChange}
            />
          )}
        </div>
        <div className='board-members'>
          {board.members?.map((member, index) => {
            return (
              <div key={index} className='board-members__avatar pointer'>
                <img src={member.avatar} alt='' className='img-cover' />
              </div>
            );
          })}
          <div className='add-member__btn'>
            <button
              onClick={() => {
                handleShowModal('addBoardMember');
              }}
              className='btn btn-primary btn-icon__flex'
            >
              <AddIcon />
            </button>

            {modalToShow?.name === 'addBoardMember' && (
              <InviteMember
                type={'Board'}
                availableMembers={allMembers}
                existingMembers={board.members}
                onNewMember={handleNewMember}
                setModalToShow={setModalToShow}
              />
            )}
          </div>
        </div>
      </div>
      <div className='view-board__option_two'>
        <button
          onClick={() => handleShowModal('boardMenu')}
          className='btn btn-gray btn_svg__flex'
        >
          <MoreHorizIcon />
          <span>Show Menu</span>
        </button>
        {modalToShow.name === 'boardMenu' && (
          <BoardMenu
            handleShowModal={handleShowModal}
            board={board}
            setModalToShow={setModalToShow}
            user={user}
            onSaveDescription={handleSaveDescription}
            onRemoveMember={handleRemoveMember}
          />
        )}
      </div>
    </section>
  );
}

export default ViewBoardHeader;
