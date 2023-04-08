import { Routes,Route, BrowserRouter,useParams} from 'react-router-dom';


import './App.css'

import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>

        <Route path='/contact' element= {<Contact />}/>

        <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<Signup />} />

        <Route path='/app' element = {<Home/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
