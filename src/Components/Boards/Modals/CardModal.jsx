import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import LabelIcon from '@mui/icons-material/Label';
import ImageIcon from '@mui/icons-material/Image';
import InviteMember from './InviteMember';
import AddIcon from '@mui/icons-material/Add';
import CreateLabelCard from './CreateLabelCard';
import CreateCoverCard from './CreateCoverCard';
import EditSaveDescription from '../Common/EditSaveDescription';
import onClickOutside from 'react-onclickoutside';
// import Moment from 'react-moment';
import moment from 'moment';

function CardModal({
  cardEdit,
  setCardEdit,
  handleShowModal,
  modalToShow,
  setModalToShow,
  user,
  onSaveDescription,
  onNewMember,
  onNewCover,
  onNewlabel,
  onNewComment,
}) {
  const [showCardMembers, setShowCardMembers] = useState(false);
  const [newComment, setNewComment] = useState({ user, date: '14 Nov July' });

  const { card, list, board } = cardEdit;

  const processNewComment = () => {
    if (newComment.comment?.length > 1) {
      onNewComment(newComment, list, card);
      setNewComment({ ...newComment, comment: '' });
    }
  };
  CardModal.handleClickOutside = () => setCardEdit({});

  return (
    <div data-testid='list-card-modal' className='modal-body'>
      <div className='card-main-img'>
        <img src={card.cover} alt='' className='img-cover' />
        <button
          onClick={() => setCardEdit({})}
          className='btn btn-primary btn-icon__flex'
        >
          <CloseIcon />
        </button>
      </div>
      <div className='card-board-details'>
        <div className='card-board-description-comments'>
          <p className='card-title'> {card.title}</p>
          <span className='inlist__text'>
            In list <b>{list.name}</b>
          </span>
          <EditSaveDescription
            description={card.description}
            onSaveDescription={onSaveDescription}
            list={list}
            card={card}
          />
          <div className='view-edit__tab'>
            <small className='text__svg'>
              <DescriptionIcon /> Attachment
            </small>
            <button className='btn btn-white btn_svg__flex'>
              <EditIcon />
              Edit
            </button>
          </div>
          <div className='card-all-attachments'>
            {card.attachments?.map((attachment, index) => {
              return (
                <div key={index} className='each-attachment'>
                  <div className='each-attachment__img'>
                    <img src={attachment.cover} alt='' className='img-cover' />
                  </div>
                  <div className='each-attachment__info'>
                    <time
                      dateTime={attachment.date}
                      className='attachment__date'
                    >
                      Added{' '}
                      {`${moment(attachment.date).format('MMMM DD, YYYY')}`}
                    </time>
                    <p className='attachment__title'>
                      {attachment.title || 'Acctchment Title'}
                    </p>
                    <div className='attachment__btn'>
                      <button className='btn btn-white'>Download</button>
                      <button className='btn btn-white'>Delete</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='card-all-comments'>
            <div className='new-comment-container'>
              <div>
                <div className='new-comment__img'>
                  <img src={user.avatar} alt='' className='img-cover' />
                </div>
              </div>
              <textarea
                placeholder='Write a Comment...'
                className='textarea-comment-edit'
                value={newComment.comment || ''}
                onChange={(e) =>
                  setNewComment({
                    ...newComment,
                    comment: e.currentTarget.value,
                  })
                }
              ></textarea>
              <div className='new-comment__btn'>
                <button
                  onClick={() => processNewComment()}
                  className='btn btn-primary'
                >
                  comment
                </button>
              </div>
            </div>
            {card.comments?.map((comment, index) => {
              return (
                <div key={index} className='all-comments-view'>
                  <div className='comment-profile'>
                    <div className='comment-profile_name_date'>
                      <div className='profile_img'>
                        <img
                          src={comment.user.avatar}
                          alt=''
                          className='img-cover'
                        />
                      </div>
                      <div className='profile_name_date'>
                        <p className='profile_name'>{comment.user.name}</p>
                        <time dateTime={comment.date} className='comment_date'>
                          {`${moment(comment.date).format(
                            'DD MMMM'
                          )} at ${moment(comment.date).format('hh:mm')}`}
                        </time>
                      </div>
                    </div>
                    <div className='comment-delete-edit'>
                      <span className='cursor-span'>Edit </span>{' '}
                      <span className='edit-delete__li'> - </span>{' '}
                      <span className='cursor-span'> Delete</span>
                    </div>
                  </div>
                  <p className='comment__text'>{comment.comment}</p>
                  <div className='comment__line'></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='card-board-members'>
          <small className='icon-name__flex'>
            <AccountCircleIcon />
            <span>Action</span>
          </small>
          <div className='listed-card-actions'>
            <div className='members-actions'>
              <button
                onClick={() => setShowCardMembers((oldB) => !oldB)}
                className='btn btn-gray btn_svg__flex members'
              >
                <GroupIcon /> <span>Members</span>
              </button>
              {showCardMembers && (
                <div className='card-modal-show-members'>
                  <div className='icon-name__flex'>
                    <GroupIcon />
                    <span>Members</span>
                  </div>
                  <div className='existing-team-members'>
                    {cardEdit.card.members.map((member, index) => {
                      return (
                        <div key={index} className='team-img-name'>
                          <div className='team__img'>
                            <img
                              src={member.avatar}
                              alt=''
                              className='img-cover'
                            />
                          </div>
                          <p>{member.name}</p>
                        </div>
                      );
                    })}
                    <div className='add-new-member-mini-modal'>
                      <button
                        onClick={() => handleShowModal('showCardInviteMember')}
                        className='btn add-another__span'
                      >
                        <span>Assign a member</span>
                        <AddIcon />
                      </button>
                      {modalToShow.name === 'showCardInviteMember' && (
                        <InviteMember
                          availableMembers={board.members}
                          existingMembers={card.members}
                          onNewMember={onNewMember}
                          list={list}
                          card={card}
                          setModalToShow={setModalToShow}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='create-label-mini-modal'>
              <button
                onClick={() => handleShowModal('showCardNewLabel')}
                className='btn btn-gray btn_svg__flex labels'
              >
                <LabelIcon /> <span>Labels</span>
              </button>
              {modalToShow.name === 'showCardNewLabel' && (
                <CreateLabelCard
                  card={card}
                  onNewlabel={onNewlabel}
                  list={list}
                  setModalToShow={setModalToShow}
                />
              )}
            </div>
            <div className='create-cover-mini-modal'>
              <button
                onClick={() => handleShowModal('showCardNewCover')}
                className='btn btn-gray btn_svg__flex cover'
              >
                <ImageIcon /> <span>Cover</span>
              </button>
              {modalToShow.name === 'showCardNewCover' && (
                <CreateCoverCard
                  card={card}
                  onNewCover={onNewCover}
                  list={list}
                  setModalToShow={setModalToShow}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CardModal.handleClickOutside,
};
export default onClickOutside(CardModal, clickOutsideConfig);
