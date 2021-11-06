export const CreateLabelCard = () => {
  return (
    <div className='search-modal-container'>
      <div className='card'>
        <div className='card-body'>
          <div className='search__header__searchbox'>
            <div className='search-header-sub'>
              <p className='search-header'>Invite to Board</p>
              <p className='search-sub-header'>
                Search users you want to invite to
              </p>
            </div>
            <div className='header-search'>
              <input
                type='text'
                className='form-control'
                placeholder='User..'
              />
            </div>
          </div>

          <div className='members-list-card'>
            <div className='members-list-body'>
              <div className='each-member'>
                <div className='member__img'>
                  <img src='' alt='' className='img-cover' />
                </div>
                <p className='member__name_p'>Daniel Adebonojo</p>
              </div>
              <div className='each-member'>
                <div className='member__img'>
                  <img src='' alt='' className='img-cover' />
                </div>
                <p className='member__name_p'>Daniel Adebonojo</p>
              </div>
            </div>
          </div>
          <div className='submit-btn'>
            <button className='btn btn-primary'>Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
};
