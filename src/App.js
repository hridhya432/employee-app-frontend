import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<Add/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
    

    </Routes>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
