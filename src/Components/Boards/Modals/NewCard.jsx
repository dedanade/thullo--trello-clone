export const NewCardDiv = () => {
  return (
    <div className='mini-newcard__card'>
      <div className='new-card__body'>
        <input
          type='text'
          placeholder='Enter a title for this card...'
          className='form-control'
        />
        <div className='new-card__btn'>
          <button className='btn btn-green'> Save</button>
        </div>
      </div>
    </div>
  );
};
