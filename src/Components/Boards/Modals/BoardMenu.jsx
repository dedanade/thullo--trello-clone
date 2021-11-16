import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import React from 'react';
import EditSaveDescription from '../Common/EditSaveDescription';
import onClickOutside from 'react-onclickoutside';
import moment from 'moment';
function BoardMenu({
  handleShowModal,
  board,
  user,
  onSaveDescription,
  onRemoveMember,
}) {
  BoardMenu.handleClickOutside = () => handleShowModal('boardMenu');

  return (
    <div data-testid='board-menu-modal' className='view-menu-container'>
      <div className='view-menu-body'>
        <div className='view-menu-header'>
          <p className='text-bolder'>{board.title}</p>
          <span
            onClick={() => handleShowModal('boardMenu')}
            className='text-bolder pointer'
          >
            <CloseIcon />
          </span>
        </div>
        <div className='header__line'></div>

        <small className='made-by'>
          <AccountCircleIcon />
          Made by
        </small>

        <div className='made-by-profile'>
          <div className='made-by__img'>
            <img src={user.avatar} alt='' className='img-cover' />
          </div>
          <div className='made-by__name'>
            <p className='text-bolder'>{user.name}</p>
            <time dateTime={board.date}>{`on ${moment(board.date).format(
              'DD MMMM, YYYY'
            )}`}</time>
          </div>
        </div>
        <EditSaveDescription
          onSaveDescription={onSaveDescription}
          description={board.description}
        />
        <div className='menu-board-team'>
          <small className='team-text'>
            <DescriptionIcon /> Team
          </small>

          {board.members.map((member, index) => {
            return (
              <div key={index} className='team-img-action'>
                <div className='team-img-name'>
                  <div className='team__img'>
                    <img src={member.avatar} alt='' className='img-cover' />
                  </div>
                  <p>{member.name}</p>
                </div>
                <div className='team__action'>
                  {member.role === 'Admin' ? (
                    <button className='btn btn-not-active'> Admin </button>
                  ) : (
                    <button
                      onClick={() => onRemoveMember(member)}
                      className='btn btn-danger'
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => BoardMenu.handleClickOutside,
};
export default onClickOutside(BoardMenu, clickOutsideConfig);
