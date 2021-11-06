import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';

export const ViewMenu = () => {
  return (
    <div className='view-menu-container'>
      <div className='view-menu-body'>
        <div className='view-menu-header'>
          <p className='text-bolder'>DevChallenges Board</p>
          <span className='text-bolder'>
            <CloseIcon />
          </span>
        </div>
        <div className='header__line'></div>

        <span className='made-by'>
          <AccountCircleIcon />
          Made by
        </span>

        <div className='made-by-profile'>
          <div className='made-by__img'>
            <img src='' alt='' className='img-cover' />
          </div>
          <div className='made-by__name'>
            <p className='text-bolder'>Daniel Adebonojo</p>
            <p> on 4 July, 2020</p>
          </div>
        </div>
        <div className='view-edit__tab'>
          <span className='text__svg'>
            <DescriptionIcon /> Description
          </span>
          <button className='btn btn-white btn_svg__flex'>
            <EditIcon />
            Edit
          </button>
        </div>
        <div className='description-view'>
          {/* <p className='description-view__text text-bold'>
              Simple board to start on a project. Each list can hold items
              (cards) that represent ideas or tasks.
              <br />
              There 4 lists here:
              <br />
              *Backlog 🤔 : Ideas are created here. Here people can describe the
              idea following three simple questions: Why you wish to do it, What
              it is, how can you do it.
              <br />
              * In Progress📚: Once the ideas is clearly defined, the task can
              move to #todo stage. Here the owner of the idea can move to #doing
              once s/he is ready. He can also wait a bit for other members to
              join.
              <br />
              * In Review ⚙️: On-going *
              <br />
              Completed 🙌🏽**: Finished You could add other lists like labels
              holding labels (with colors) in order to tag each card by a label
              if you wish.
            </p> */}
        </div>
        <textarea name='' id='' className='edit-description-textarea'>
          Simple board to start on a project. Each list can hold items (cards)
          that represent ideas or tasks. There 4 lists here: *Backlog 🤔 : Ideas
          are created here. Here people can describe the idea following three
          simple questions: Why you wish to do it, What it is, how can you do
          it. * In Progress📚: Once the ideas is clearly defined, the task can
          move to #todo stage. Here the owner of the idea can move to #doing
          once s/he is ready. He can also wait a bit for other members to join.
          * In Review ⚙️: On-going * Completed 🙌🏽**: Finished You could add
          other lists like labels holding labels (with colors) in order to tag
          each card by a label if you wish.
        </textarea>
        <div className='menu-board-team'>
          <span className='team-text'>
            <DescriptionIcon /> Team
          </span>

          <div className='team-img-action'>
            <div className='team-img-name'>
              <div className='team__img'>
                <img src='' alt='' className='img-cover' />
              </div>
              <p>Daniel Adebonojo</p>
            </div>

            <div className='team__action'>
              <button className='btn btn-not-active'> Admin</button>
            </div>
          </div>
          <div className='team-img-action'>
            <div className='team-img-name'>
              <div className='team__img'>
                <img src='' alt='' className='img-cover' />
              </div>
              <p className='text-bold'>Daniel Adebonojo</p>
            </div>

            <div className='team__action'>
              <button className='btn btn-danger'> Remove </button>
            </div>
          </div>
          <div className='team-img-action'>
            <div className='team-img-name'>
              <div className='team__img'>
                <img src='' alt='' className='img-cover' />
              </div>
              <p className='text-bold'>Daniel Adebonojo</p>
            </div>

            <div className='team__action'>
              <button className='btn btn-danger'> Remove </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
