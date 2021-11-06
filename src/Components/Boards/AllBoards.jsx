import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Header from '../Header/Header';
import CreateBoardModal from './CreateBoardModal';
function AllBoards(props) {
  return (
    <>
      <Header />
      <section className='all-boards-container'>
        <div className='all-boards__title-btn'>
          <p className='all-boards__title'>All Boards</p>
          <button className='btn btn-primary all-boards__btn btn_svg__flex'>
            <AddIcon />
            <span>Add</span>
          </button>
        </div>
        <section className='all-boards'>
          <div className='card-container'>
            <div className='card'>
              <div className='card-body'>
                <div className='boards-card-content'>
                  <div className='board-card__img'>
                    <img
                      src='https://avatars.githubusercontent.com/u/66811981?v=4'
                      alt=''
                      className='img-cover'
                    />
                  </div>
                  <p className='board-name__header'>
                    Devchanleges Board hfhfhfhfhhfhfhffffffffffffffhhhhhhhhhhh
                  </p>
                  <div className='board-members'>
                    <div className='all-board-members_card'>
                      <div className='board-member__img'>
                        <img
                          src='https://avatars.githubusercontent.com/u/66811981?v=4'
                          alt=''
                          className='img-cover'
                        />
                      </div>
                      <div className='board-member__img'>
                        <img
                          src='https://avatars.githubusercontent.com/u/66811981?v=4'
                          alt=''
                          className='img-cover'
                        />
                      </div>
                      <div className='board-member__img'>
                        <img
                          src='https://avatars.githubusercontent.com/u/66811981?v=4'
                          alt=''
                          className='img-cover'
                        />
                      </div>
                      <p className='board-members__p'>+ 5 Others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <CreateBoardModal /> */}
      </section>
    </>
  );
}

export default AllBoards;
