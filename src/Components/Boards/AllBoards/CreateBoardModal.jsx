/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
import LockIcon from '@mui/icons-material/Lock';
import AddIcon from '@mui/icons-material/Add';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityModal from '../Modals/VisibilityModal';
import { useDispatch } from 'react-redux';
import { newBoardAction } from '../../../redux/actions/boardActions';
import onClickOutside from 'react-onclickoutside';

function CreateBoardModal({ setShowCreateModal, user }) {
  const [newBoard, setNewBoard] = useState({});
  const uploadCoverRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!newBoard.cover) {
      const Http = new XMLHttpRequest();
      const url = `https://api.unsplash.com/photos/random?query=project management&client_id=${process.env.REACT_APP_UNSPLASH_ID}`;
      Http.open('GET', url);
      Http.send();

      Http.onload = (e) => {
        const response = JSON.parse(Http.responseText).urls.regular;
        setNewBoard({ ...newBoard, cover: response });
      };
    }
    return () => {
      setNewBoard({});
    };
  }, []);

  const onOpenFile = () => {
    uploadCoverRef.current.click();
  };

  const handleCoverUploadOnchange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setNewBoard({ newBoard, cover: url });
  };
  const handlePrivacyChange = (value) => {
    setNewBoard({ ...newBoard, privacyType: value, openPrivacy: false });
  };

  const onChangeOnBoardname = (value) => {
    setNewBoard({ ...newBoard, boardName: value });
  };

  const onSubmit = () => {
    if (!newBoard.boardName || newBoard.boardName.length < 1) {
      alert('Put in a board name');
    } else {
      const dispatchBoard = {
        title: newBoard.boardName,
        cover: newBoard.cover,
        privacy: newBoard.privacyType,
        members: [user],
        date: new Date().toISOString(),
      };
      dispatch(newBoardAction(dispatchBoard));
      setNewBoard({});
      setShowCreateModal(false);
    }
  };
  CreateBoardModal.handleClickOutside = () => setShowCreateModal(false);

  return (
    <div className='modal-body'>
      <input
        ref={uploadCoverRef}
        type='file'
        accept='image/*'
        onChange={(e) => handleCoverUploadOnchange(e)}
        hidden={true}
      />
      <div className='add-board-content'>
        <div className='add-modal-img'>
          <img src={newBoard.cover} alt='' className='img-cover' />

          <button
            onClick={() => {
              setShowCreateModal(false);
            }}
            className='btn btn-primary btn-icon__flex cancel-modal__span'
          >
            <CloseIcon />
          </button>
        </div>
        <input
          type='text'
          value={newBoard.boardName || ''}
          onChange={(e) => onChangeOnBoardname(e.currentTarget.value)}
          className='form-control'
          placeholder='Add board title'
        />
        <div className='add-board-options'>
          <button
            onClick={() => onOpenFile()}
            className='btn btn-gray btn_svg__flex'
          >
            <ImageIcon /> <span>Cover</span>
          </button>
          <div className='add-board__privacy'>
            <button
              onClick={() =>
                setNewBoard({
                  ...newBoard,
                  openPrivacy: !newBoard.openPrivacy,
                })
              }
              className='btn btn-gray btn_svg__flex'
            >
              {newBoard.privacyType === 'Public' ? (
                <PublicIcon />
              ) : (
                <LockIcon />
              )}
              <span>{newBoard.privacyType || 'Private'} </span>
            </button>
            {newBoard.openPrivacy && (
              <VisibilityModal
                handlePrivacyChange={handlePrivacyChange}
                handleCloseModal={() =>
                  setNewBoard({
                    ...newBoard,
                    openPrivacy: false,
                  })
                }
              />
            )}
          </div>
        </div>
        <div className='modal-button-options'>
          <button className='btn modal-cancel'> Cancel</button>
          <button
            onClick={() => onSubmit()}
            className='btn btn-primary btn_svg__flex'
          >
            <AddIcon /> <span>Create</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CreateBoardModal.handleClickOutside,
};
export default onClickOutside(CreateBoardModal, clickOutsideConfig);
