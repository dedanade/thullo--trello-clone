import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function CreateCoverCard({ onNewCover, list, card, setModalToShow }) {
  const [coverImages, setCoverImages] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const Http = new XMLHttpRequest();
    const url =
      'https://api.unsplash.com/search/photos?page=1&per_page=50&query=management&client_id=fedd3a5Vga9NORjerh0SSQWgFhStNj0tSo2PCmuqGAk';
    Http.open('GET', url);
    Http.send();

    Http.onload = (e) => {
      const coverImages = JSON.parse(Http.responseText);
      setCoverImages(coverImages.results);
    };
  }, []);

  const handleUnsplashSearch = () => {
    if (searchValue.length) {
      const Http = new XMLHttpRequest();
      const url = `https://api.unsplash.com/search/photos?page=1&per_page=50&query=${searchValue}&client_id=fedd3a5Vga9NORjerh0SSQWgFhStNj0tSo2PCmuqGAk`;
      Http.open('GET', url);
      Http.send();
      Http.onload = (e) => {
        const coverImages = JSON.parse(Http.responseText);
        setCoverImages(coverImages.results);
      };
    }
  };
  CreateCoverCard.handleClickOutside = () => setModalToShow({});

  return (
    <div className='search-modal-container'>
      <div className='card'>
        <div className='card-body'>
          <div className='search__header__searchbox'>
            <div className='search-header-sub'>
              <p className='search-header'>Label</p>
              <p className='search-sub-header'>Select a name and a color</p>
            </div>
            <div className='header-search'>
              <input
                type='text'
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                className='hide-input-control'
                placeholder='Search..'
              />
              <button
                onClick={() => handleUnsplashSearch()}
                className='btn btn-primary btn-icon__flex'
              >
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className='new-cover-card'>
            {coverImages?.length ? (
              <ul className='cover-list'>
                {coverImages?.map((cover) => {
                  return (
                    <li
                      onClick={() => onNewCover(cover.urls.regular, list, card)}
                      className='each-cover'
                    >
                      <img
                        src={cover.urls.small}
                        alt=''
                        className='img-cover'
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CreateCoverCard.handleClickOutside,
};
export default onClickOutside(CreateCoverCard, clickOutsideConfig);
