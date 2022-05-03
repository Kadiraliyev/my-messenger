import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navbar />
      <div className='app_wrapper_content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
