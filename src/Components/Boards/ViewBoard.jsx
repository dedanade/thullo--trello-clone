import React from 'react';
import Header from '../Header/Header';
import LockIcon from '@mui/icons-material/Lock';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from '@mui/icons-material/Comment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import LabelIcon from '@mui/icons-material/Label';
import ImageIcon from '@mui/icons-material/Image';
import { InviteMember } from './Modals/InviteMember';

// import { VisibilityModal } from './Modals/VisibilityModal';

function ViewBoard(props) {
  const CardModal = () => {
    return (
      <div className='view-board-card-modal modal'>
        <div className='modal-body'>
          <div className='card-main-img'>
            <img src='' alt='' className='img-cover' />
            <button className='btn btn-primary btn-icon__flex'>
              <CloseIcon />
            </button>
          </div>
          <div className='card-board-details'>
            <div className='card-board-description-comments'>
              <p className='card-title'> Card Title Here</p>
              <span className='inlist__text'>
                In list <b>In Progess</b>
              </span>
              <div className='view-edit__tab'>
                <span className='text__svg'>
                  <DescriptionIcon /> Description
                </span>
                <button className='btn btn-white btn_svg__flex'>
                  <EditIcon />
                  Edit
                </button>
              </div>
              <div className='comment__view'>
                <p>
                  Ideas are created and share here through a card. Here you can
                  describe what you'd like to accomplish. For example you can
                  follow three simple questions to create the card related to
                  your idea: * Why ? (Why do you wish to do it ?) * What ? (What
                  it is it, what are the goals, who is concerned) * How ? (How
                  do you think you can do it ? What are the required steps ?)
                  After creation, you can move your card to the todo list
                </p>
              </div>
              <div className='view-edit__tab'>
                <span className='text__svg'>
                  <DescriptionIcon /> Attachment
                </span>
                <button className='btn btn-white btn_svg__flex'>
                  <EditIcon />
                  Edit
                </button>
              </div>
              <div className='card-all-attachments'>
                <div className='each-attachment'>
                  <div className='each-attachment__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <div className='each-attachment__info'>
                    <p className='attachment__date'>Added July 5 2020</p>
                    <p className='attachment__title'>Added July 5 2020</p>
                    <div className='attachment__btn'>
                      <button className='btn btn-white'>Download</button>
                      <button className='btn btn-white'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-all-comments'>
                <div className='new-comment-container'>
                  <div className='new-comment__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <textarea
                    placeholder='Write a Comment...'
                    className='textarea-comment-edit'
                  ></textarea>
                  <button className='btn btn-primary'>comment</button>
                </div>
                <div className='all-comments-view'>
                  <div className='comment-profile'>
                    <div className='comment-profile_name_date'>
                      <div className='profile_img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <div className='profile_name_date'>
                        <p className='profile_name'>Daniel Adebonojo</p>
                        <p className='comment_date'>Comment Date</p>
                      </div>
                    </div>
                    <div className='comment-delete-edit'>
                      <span className='cursor-span'>Edit </span>{' '}
                      <span className='edit-delete__li'> - </span>{' '}
                      <span className='cursor-span'> Delete</span>
                    </div>
                  </div>

                  <p className='comment__text'>
                    “The gladdest moment in human life, methinks, is a departure
                    into unknown lands.” – Sir Richard Burton
                  </p>
                  <div className='comment__line'></div>
                </div>
              </div>
            </div>
            <div className='card-board-members'>
              <div className='icon-name__flex'>
                <AccountCircleIcon />
                <span>Action</span>
              </div>
              <div className='listed-card-actions'>
                <div className='members-actions'>
                  <button className='btn btn-gray btn_svg__flex members'>
                    <GroupIcon /> <span>Members</span>
                  </button>
                  <div className='icon-name__flex'>
                    <GroupIcon />
                    <span>Members</span>
                  </div>
                  {/* <div className='existing-team-members'>
                    <div className='team-img-name'>
                      <div className='team__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <p>Daniel Adebonojo</p>
                    </div>
                    <div className='team-img-name'>
                      <div className='team__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <p>Daniel Adebonojo00000000000000</p>
                    </div>
                    <div className='team-img-name'>
                      <div className='team__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <p>Daniel Adebonojo</p>
                    </div>
                    <div className='add-new-member'>
                      <button className='btn add-another__span'>
                        <span>Assign a member</span>
                        <AddIcon />
                        <InviteMember />
                      </button>
                    </div>
                  </div> */}
                </div>
                <div className='create-label-card'>
                  <button className='btn btn-gray btn_svg__flex labels'>
                    <LabelIcon /> <span>Labels</span>
                  </button>
                  <InviteMember />
                </div>
                <button className='btn btn-gray btn_svg__flex cover'>
                  <ImageIcon /> <span>Cover</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header boarddName={true} />
      <section className='view-board'>
        <div className='view-board__header'>
          <div className='view-board__option_one'>
            <button className='btn btn-gray btn_svg__flex'>
              <LockIcon />
              <span>Private</span>
            </button>
            {/* <VisibilityModal /> */}
            <div className='board-members'>
              <div className='board-members__avatar'>
                <img src='' alt='' className='img-cover' />
              </div>
              <div className='board-members__avatar'>
                <img src='' alt='' className='img-cover' />
              </div>
              <div className='board-members__avatar'>
                <img src='' alt='' className='img-cover' />
              </div>
              <div className='add-member__btn'>
                <button className='btn btn-primary btn-icon__flex'>
                  <AddIcon />
                </button>
                {/* <InviteMember /> */}
              </div>
            </div>
          </div>
          <div className='view-board__option_two'>
            <button className='btn btn-gray btn_svg__flex'>
              <MoreHorizIcon />
              <span>Show Menu</span>
            </button>
            {/* <ViewMenu /> */}
          </div>
        </div>
        <section className='board-cards__section'>
          <div className='all-board-cards'>
            <div className='board-card'>
              <div className='board-card__header'>
                <span className='board-card__header_text'>Backlog</span>
                <span className='board-card__option__svg'>
                  <MoreHorizIcon />
                </span>
              </div>
              <div className='card board-view-card'>
                <div className='card-body'>
                  <div className='board-card__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <p className='board-card__title'>
                    This is this card Title for people of us
                  </p>
                  <div className='board-card__label'>
                    <span className='board-card__label_each'>Tech</span>
                    <span className='board-card__label_each'>Hisotry</span>
                    <span className='board-card__label_each'>Life</span>
                  </div>
                  <div className='board-card__members-comments'>
                    <div className='all-board-members_card'>
                      <div className='board-member__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <button className='btn btn-primary btn-icon__flex'>
                        <AddIcon />
                      </button>
                    </div>

                    <div className='board-card__comments-link'>
                      <span className='board-card__comment_text'>
                        <CommentIcon /> <span>1</span>
                      </span>
                      <span className='board-card__comment_text'>
                        <AttachFileIcon /> <span>2</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card board-view-card'>
                <div className='card-body'>
                  <div className='board-card__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <p className='board-card__title'>
                    This is this card Title for people of us
                  </p>
                  <div className='board-card__label'>
                    <span className='board-card__label_each'>Tech</span>
                    <span className='board-card__label_each'>Hisotry</span>
                    <span className='board-card__label_each'>Life</span>
                  </div>
                  <div className='board-card__members-comments'>
                    <div className='all-board-members_card'>
                      <div className='board-member__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <button className='btn btn-primary btn-icon__flex'>
                        <AddIcon />
                      </button>
                    </div>

                    <div className='board-card__comments-link'>
                      <span className='board-card__comment_text'>
                        <CommentIcon /> <span>1</span>
                      </span>
                      <span className='board-card__comment_text'>
                        <AttachFileIcon /> <span>2</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <NewCardDiv /> */}
              <button className='btn add-another__span'>
                <span>Add another card</span>
                <AddIcon />
              </button>
            </div>
            <div className='board-card'>
              <div className='board-card__header'>
                <span className='board-card__header_text'>Backlog</span>
                <span className='board-card__option__svg'>
                  <MoreHorizIcon />
                </span>
              </div>
              <div className='card board-view-card'>
                <div className='card-body'>
                  <div className='board-card__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <p className='board-card__title'>
                    This is this card Title for people of us
                  </p>
                  <div className='board-card__label'>
                    <span className='board-card__label_each'>Tech</span>
                    <span className='board-card__label_each'>Hisotry</span>
                    <span className='board-card__label_each'>Life</span>
                  </div>
                  <div className='board-card__members-comments'>
                    <div className='all-board-members_card'>
                      <div className='board-member__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <button className='btn btn-primary btn-icon__flex'>
                        <AddIcon />
                      </button>
                    </div>

                    <div className='board-card__comments-link'>
                      <span className='board-card__comment_text'>
                        <CommentIcon /> <span>1</span>
                      </span>
                      <span className='board-card__comment_text'>
                        <AttachFileIcon /> <span>2</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='board-card'>
              <div className='board-card__header'>
                <span className='board-card__header_text'>Backlog</span>
                <MoreHorizIcon />
              </div>
              <div className='card board-view-card'>
                <div className='card-body'>
                  <div className='board-card__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <p className='board-card__title'>
                    This is this card Title for people of us
                  </p>
                  <div className='board-card__label'>
                    <span className='board-card__label_each'>Tech</span>
                    <span className='board-card__label_each'>Hisotry</span>
                    <span className='board-card__label_each'>Life</span>
                  </div>
                  <div className='board-card__members-comments'>
                    <div className='all-board-members_card'>
                      <div className='board-member__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <button className='btn btn-primary btn-icon__flex'>
                        <AddIcon />
                      </button>
                    </div>

                    <div className='board-card__comments-link'>
                      <span className='board-card__comment_text'>
                        <CommentIcon /> <span>1</span>
                      </span>
                      <span className='board-card__comment_text'>
                        <AttachFileIcon /> <span>2</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='board-card'>
              <div className='board-card__header'>
                <span className='board-card__header_text'>Backlog</span>
                <MoreHorizIcon />
              </div>
              <div className='card board-view-card'>
                <div className='card-body'>
                  <div className='board-card__img'>
                    <img src='' alt='' className='img-cover' />
                  </div>
                  <p className='board-card__title'>
                    This is this card Title for people of us
                  </p>
                  <div className='board-card__label'>
                    <span className='board-card__label_each'>Tech</span>
                    <span className='board-card__label_each'>Hisotry</span>
                    <span className='board-card__label_each'>Life</span>
                  </div>
                  <div className='board-card__members-comments'>
                    <div className='all-board-members_card'>
                      <div className='board-member__img'>
                        <img src='' alt='' className='img-cover' />
                      </div>
                      <button className='btn btn-primary btn-icon__flex'>
                        <AddIcon />
                      </button>
                    </div>

                    <div className='board-card__comments-link'>
                      <span className='board-card__comment_text'>
                        <CommentIcon /> <span>1</span>
                      </span>
                      <span className='board-card__comment_text'>
                        <AttachFileIcon /> <span>2</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='btn add-another__span'>
              <span>Add another List </span>
              <AddIcon />
            </button>
          </div>
        </section>
        <CardModal />
      </section>
    </>
  );
}

export default ViewBoard;
