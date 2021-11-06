import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
import LockIcon from '@mui/icons-material/Lock';
import AddIcon from '@mui/icons-material/Add';

function CreateBoardModal(props) {
  return (
    <div className='modal'>
      <div className='modal-body'>
        <div className='add-board-content'>
          <div className='add-modal-img'>
            <img
              src='https://avatars.githubusercontent.com/u/66811981?v=4'
              alt=''
              className='img-cover'
            />
            <button className='btn btn-primary btn_icon__flex cancel-modal__span'>
              <CloseIcon />
            </button>
          </div>
          <input
            type='text'
            name=''
            id=''
            className='form-control'
            placeholder='Add board title'
          />
          <div className='add-board-options'>
            <button className='btn btn-gray btn_svg__flex'>
              <ImageIcon /> <span>Cover</span>
            </button>
            <button className='btn btn-gray btn_svg__flex'>
              <LockIcon /> <span>Private </span>
            </button>
          </div>
          <div className='modal-button-options'>
            <button className='btn modal-cancel'> Cancel</button>
            <button className='btn btn-primary btn_svg__flex'>
              <AddIcon /> <span>Create</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBoardModal;
