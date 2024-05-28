import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import { BookAd, GenerateCardChild, GenerateCards, MyCards, SubPlan } from './Components/CmptIndex'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='BookAd' element={<BookAd />} />
          <Route path='GenerateCardsChild' element={<GenerateCardChild />} />
          <Route path='GenerateCards' element={<GenerateCards />} />
          <Route path='MyCards' element={<MyCards />} />
          <Route path='Subplan' element={<SubPlan />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;