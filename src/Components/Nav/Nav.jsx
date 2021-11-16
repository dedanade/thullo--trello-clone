import React from 'react';
import { ReactComponent as BIG_LOGO } from '../../images/Logo.svg';
import { ReactComponent as SMALL_LOGO } from '../../images/Logo-small.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Nav({ boarddName }) {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  return (
    <nav className='thullo-nav'>
      <div>
        <div className='logo_board-name'>
          <NavLink to='/'>
            <span className='thullo-logo__bg'>
              <BIG_LOGO />
            </span>
          </NavLink>
          <NavLink to='/'>
            <span className='thullo-logo__sm'>
              <SMALL_LOGO />
            </span>
          </NavLink>
          {boarddName && (
            <div className='extra-header'>
              <p className='extra-header__p'> {boarddName}</p>
              <span className='extra-header__line'></span>
              <button
                onClick={() => history.push('/')}
                className='btn btn_svg__flex'
              >
                <ViewModuleIcon /> <span>All board</span>
              </button>
            </div>
          )}
        </div>
        <div className='header_search_profile'>
          <div className='header-search'>
            <input
              type='text'
              className='hide-input-control'
              placeholder='Keywords'
            />
            <button className='btn btn-primary'>Search</button>
          </div>
          <div className='header-profile'>
            <div className='header-profile__img'>
              <img src={user.avatar} alt='' className='img-cover' />
            </div>
            <p className='header-profile__name'>{user.name}</p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
