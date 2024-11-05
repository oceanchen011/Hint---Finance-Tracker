import './App.css';
import LoginSignup from './Components/Login/LoginSignup';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Budget from './Components/Budgets/Budget.jsx';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<LoginSignup/>}></Route>
        <Route path='/HomeScreen' element={<HomeScreen/>}></Route>
        <Route path='/Budget' element={<Budget/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
