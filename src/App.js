import './styles/index.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AllBoards from './Components/Boards/AllBoards';
import Footer from './Components/Footer/Footer';
import ViewBoard from './Components/Boards/ViewBoard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/board/:title/:id' component={ViewBoard} />
        <Route exact path='/boards' component={AllBoards} />
        {/* <Route path='/register' component /> */}
        <Route path='/' component={AllBoards} />
        <Redirect to='/boards' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
