
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Buses from './Components/Buses/Buses';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar';
import Bus from './Pages/Bus'
import DisplayBus from './Components/DisplayBus/DisplayBus'

function App() {
  return (
    <>
    
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/buses' exact Component={Buses}/>
    <Route path='/bus' element={<Bus/>}/>
    <Route path="/bus/:id" render={({ match }) => <DisplayBus match={match}  />} />
      
  </Routes>
  </BrowserRouter>
  
    </>
  );
}

export default App;
