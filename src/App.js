import './App.scss';
import {
  Route,
  Routes
} from "react-router-dom";
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import AddBook from './components/pages/AddBook/AddBook';

function App() {
  return (
    <div className="App">
      <Routes>
          {/* <Route exact path="/all">
            <Home />
          </Route>*/}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/add' element={<AddBook />} />
          {/* <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/info/:id">
            <Info />
          </Route> */}
        </Routes>
    </div>
  );
}

export default App;
