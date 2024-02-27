
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Api from './components/Api';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Home/>}/>
        <Route path='/' element={<Api/>}/>
        
        
      </Routes>
          
    </div>
  );
}

export default App;

