import { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function NewCard({
  type = 'Card',
  onNewCardSave,
  setModaltoShow,
  objToSave = null,
}) {
  const [title, setTitle] = useState('');
  NewCard.handleClickOutside = () => setModaltoShow({});

  const processNewCard = () => {
    if (title.length < 1) {
      alert('A title is required');
    } else {
      onNewCardSave(title, objToSave);
      setModaltoShow({});
    }
  };
  return (
    <div data-testid='new-card-modal' className='mini-newcard__card'>
      <div className='new-card__body'>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          placeholder={`Enter a title for this ${type}...`}
          className='form-control'
        />
        <div className='new-card__btn'>
          <button onClick={() => processNewCard()} className='btn btn-green'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => NewCard.handleClickOutside,
};
export default onClickOutside(NewCard, clickOutsideConfig);
