import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Sigin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/signin' element={ <Signin />} />
          <Route path='/home' element = { <Home /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;