/* eslint-disable react-hooks/exhaustive-deps */
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

function InviteMember({
  type = 'Card',
  availableMembers,
  existingMembers,
  onNewMember,
  list = null,
  card = null,
  setModalToShow,
}) {
  const [members, setMembers] = useState({});
  const boards = useSelector((state) => state.boards.boards);

  useEffect(() => {
    const newMembers = availableMembers.filter(
      ({ _id: id1 }) => !existingMembers.some(({ _id: id2 }) => id2 === id1)
    );
    setMembers(newMembers);
  }, [boards]);
  InviteMember.handleClickOutside = () => setModalToShow({});

  return (
    <div data-testid='invite-member-modal' className='search-modal-container'>
      <div className='card'>
        <div className='card-body'>
          <div className='search__header__searchbox'>
            <div className='search-header-sub'>
              <p className='search-header'>Invite to {type}</p>
              <p className='search-sub-header'>
                Search users you want to invite to
              </p>
            </div>

            <div className='header-search'>
              <input
                type='text'
                className='hide-input-control'
                placeholder='User..'
              />
              <button className='btn btn-primary btn-icon__flex'>
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className='members-list-card mini-card'>
            <div className='members-list-body'>
              {members.length ? (
                members?.map((member, index) => {
                  return (
                    <div
                      onClick={() => onNewMember(member, list, card)}
                      key={index}
                      className='each-member pointer'
                    >
                      <div className='member__img'>
                        <img src={member.avatar} alt='' className='img-cover' />
                      </div>
                      <p className='member__name_p'>{member.name}</p>
                    </div>
                  );
                })
              ) : type === 'card' ? (
                <p>No member to show. Add more to your Board</p>
              ) : (
                <p>All members are in your board</p>
              )}
            </div>
          </div>
          <div className='submit-btn'>
            <button className='btn btn-primary'>Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => InviteMember.handleClickOutside,
};
export default onClickOutside(InviteMember, clickOutsideConfig);
