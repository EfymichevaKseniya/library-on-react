import './App.scss';
import {
  Route,
  Routes
} from "react-router-dom";
import { Home } from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import AddBook from './components/pages/AddBook/AddBook';
import { Info } from './components/pages/Info/Info';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/add' element={<AddBook />} />
          <Route path='/info/:id' element={<Info />} />
          {/* <Route exact path='/favorite' element={<Favorite />} /> */}
        </Routes>
    </div>
  );
}

export default App;
