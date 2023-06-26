import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

import Dashboard from './components/dashboard';
import MainPanels from './components/main';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/test' element={<MainPanels />}></Route>
      </Routes>
    </>
  );
}

export default App;
