import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import onClickOutside from 'react-onclickoutside';

function VisibilityModal({ handlePrivacyChange, handleCloseModal }) {
  VisibilityModal.handleClickOutside = () => handleCloseModal({});

  return (
    <div className='mini-pop-modal'>
      <div className='mini-pop-modal-body'>
        <div className='minipop-header'>
          <p className='mini-pop-bolder'>Visibility</p>
          <p>Choose who can see to this board</p>
        </div>
        <div className='minipop-options'>
          <div
            onClick={() => handlePrivacyChange('Private')}
            className='option option__one'
          >
            <span className='mini-pop-bolder'>
              <LockIcon />
              Private
            </span>
            <p>Anyone on the internet can see this</p>
          </div>
          <div
            onClick={() => handlePrivacyChange('Public')}
            className='option option__two'
          >
            <span className='mini-pop-bolder'>
              <PublicIcon /> Public
            </span>
            <p>Anyone on the internet can see this</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => VisibilityModal.handleClickOutside,
};
export default onClickOutside(VisibilityModal, clickOutsideConfig);
