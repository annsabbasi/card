import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import BookAd from './Components/BookAd';
import GenerateCardChild from './Components/GenerateCardChild';
import GenerateCards from './Components/GenerateCards';
import MyCards from './Components/MyCards';
import SubPlan from './Components/SubPlan';
import Home from './Pages/Home';
function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/BookAd' element={<BookAd />} />
        <Route path='/GenerateCardsChild' element={<GenerateCardChild />} />
        <Route path='/GenerateCards' element={<GenerateCards />} />
        <Route path='/MyCards' element={<MyCards />} />
        <Route path='/Subplan' element={<SubPlan />} />
      </Routes>
    </>
  );
}

export default App;