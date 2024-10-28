import './App.css';
import LoginSignup from './Components/Login/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<LoginSignup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
