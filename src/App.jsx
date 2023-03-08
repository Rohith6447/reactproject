 import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav';

function App() {
  return (
      <div id='back' >
        <ToastContainer />
      <Router>
        <Nav />
        <Routes>
        <Route path='/' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;