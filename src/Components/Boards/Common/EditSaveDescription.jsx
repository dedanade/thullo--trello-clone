/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import ReactMarkdown from 'react-markdown';

function EditSaveDescription({
  description,
  onSaveDescription,
  list = null,
  card = null,
}) {
  const [editDescription, setEditDescription] = useState(false);
  const [cardDescription, setCardDescription] = useState('');

  useEffect(() => {
    setCardDescription(description);
  }, []);
  return (
    <div className='view-edit-description_section'>
      <div className='view-edit__tab'>
        <small className='text__svg'>
          <DescriptionIcon /> Description
        </small>
        {!editDescription && (
          <button
            onClick={() => setEditDescription(true)}
            className='btn btn-white btn_svg__flex'
          >
            <EditIcon />
            Edit
          </button>
        )}
      </div>
      {editDescription ? (
        <>
          <textarea
            onChange={(e) => setCardDescription(e.currentTarget.value)}
            name=''
            id=''
            defaultValue={cardDescription}
            className='edit-description-textarea'
          ></textarea>
          <div className='save__edit__btn'>
            <button
              onClick={() => [
                onSaveDescription(cardDescription, list, card),
                setEditDescription(false),
              ]}
              className='btn btn-green'
            >
              Save
            </button>
            <button
              onClick={() => setEditDescription(false)}
              className='btn btn-border-less'
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div className='description-view'>
          <ReactMarkdown
            children={cardDescription}
            className={'description-view__text'}
          />
        </div>
      )}
    </div>
  );
}

export default EditSaveDescription;
