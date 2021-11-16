import LabelIcon from '@mui/icons-material/Label';
import { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function CreateLabelCard({ card, onNewlabel, list, setModalToShow }) {
  const labelColors = [
    { color: 'rgba(33, 150, 83)', background: 'rgba(33, 150, 83, 0.120)' },
    { color: 'rgba(242, 201, 76)', background: 'rgba(242, 201, 76, 0.120)' },
    { color: 'rgba(242, 153, 74)', background: 'rgba(242, 153, 74, 0.120)' },
    { color: 'rgba(235, 87, 87)', background: 'rgba(235, 87, 87, 0.120)' },
    { color: 'rgba(47, 128, 237)', background: 'rgba(47, 128, 237, 0.120)' },
    { color: 'rgba(86, 204, 242)', background: 'rgba(86, 204, 242, 0.120)' },
    { color: 'rgba(111, 207, 151)', background: 'rgba(111, 207, 151, 0.120)' },
    { color: 'rgba(51, 51, 51)', background: 'rgba(51, 51, 51, 0.120)' },
    { color: 'rgba(79, 79, 79)', background: 'rgba(79, 79, 79, 0.120)' },
    { color: 'rgba(130, 130, 130)', background: 'rgba(130, 130, 130, 0.120)' },
    { color: 'rgba(189, 189, 189)', background: 'rgba(189, 189, 189, 0.120)' },
    { color: 'rgba(224, 224, 224)', background: 'rgba(224, 224, 224, 0.120)' },
  ];

  const processNewLabel = () => {
    if (!label.name?.length || !label.color) {
      alert('Select Name and Color');
    } else {
      onNewlabel(label, list, card);
      setLabel({});
    }
  };
  CreateLabelCard.handleClickOutside = () => setModalToShow({});

  const [label, setLabel] = useState({});
  return (
    <div className='search-modal-container'>
      <div className='card'>
        <div className='card-body'>
          <div className='search__header__searchbox'>
            <div className='search-header-sub'>
              <p className='search-header'>Label</p>
              <p className='search-sub-header'>Select a name and a color</p>
            </div>
            <div className='header-input'>
              <input
                type='text'
                value={label.name || ''}
                className='form-control'
                placeholder='Label..'
                onChange={(e) => setLabel({ ...label, name: e.target.value })}
              />
            </div>
          </div>
          <div className='new-label-card'>
            <ul className='label-list mini-card'>
              {labelColors.map((labe, index) => {
                return (
                  <li
                    key={index}
                    onClick={() =>
                      setLabel({
                        ...label,
                        color: labe.color,
                        background: labe.background,
                      })
                    }
                    style={{ background: labe.color, borderRadius: '4px' }}
                    className={
                      labe.color === label.color
                        ? 'each-label active'
                        : 'each-label'
                    }
                  ></li>
                );
              })}
            </ul>
            <span className='text__svg'>
              <LabelIcon />
              Avialable
            </span>
            <div className='board-card__label'>
              {card.labels?.map((label, index) => {
                return (
                  <span
                    key={index}
                    style={{ background: label.background, color: label.color }}
                    className='board-card__label_each'
                  >
                    {label.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className='submit-btn'>
            <button
              onClick={() => processNewLabel()}
              className='btn btn-primary'
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CreateLabelCard.handleClickOutside,
};
export default onClickOutside(CreateLabelCard, clickOutsideConfig);
