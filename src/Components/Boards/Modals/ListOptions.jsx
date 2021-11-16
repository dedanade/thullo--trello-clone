import onClickOutside from 'react-onclickoutside';

function ListOptions({
  handleShowModal,
  handleDeleteList,
  index,
  list,
  setModalToShow,
}) {
  ListOptions.handleClickOutside = () => setModalToShow({});

  return (
    <div className='card-options-container'>
      <div className='card'>
        <div className='card-body'>
          <p onClick={() => handleShowModal('renameList', index)}>Rename</p>
          <span className='card-options__line'></span>
          <p onClick={() => handleDeleteList(list)}>Delete</p>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => ListOptions.handleClickOutside,
};
export default onClickOutside(ListOptions, clickOutsideConfig);
