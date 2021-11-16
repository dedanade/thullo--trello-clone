import './styles/index.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ViewBoards from './Components/Boards/AllBoards/ViewBoards';
import Footer from './Components/Footer/Footer';
import ViewBoard from './Components/Boards/Board/ViewBoard';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import MobileViewError from './Components/Error/MobileViewError';

function App() {
  const [mobileView, setMobileView] = useState(false);
  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        if (window.innerWidth < 1350) {
          setMobileView(true);
        } else {
          setMobileView(false);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
    }, []);
  }
  useWindowSize();
  if (mobileView) return <MobileViewError />;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/board/:title/:id' component={ViewBoard} />
          <Route exact path='/boards' component={ViewBoards} />
          {/* <Route path='/register' component /> */}
          <Route path='/' component={ViewBoards} />
          <Redirect to='/boards' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
