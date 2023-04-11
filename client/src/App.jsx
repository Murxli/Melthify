import { Routes,Route, BrowserRouter,useParams} from 'react-router-dom';


import './App.css'

import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat'
import AuthProvider from './contexts/AuthContext';
import Consult from './components/Consult/consult';
import Community from './components/Community/community';
import CChat from './components/Community/CChat';

function App() {
  return (
    <BrowserRouter>
    
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Landing />}/>

        <Route path='/contact' element= {<Contact />}/>

        <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<Signup />} />

        <Route path='/app' element = {<Home/>} />

        <Route path='/chat' element = {<Chat />} />

        <Route path='/consult' element = {<Consult/>} />

        <Route path='/community' element = {<Community/>} />

        <Route path='/community/:id' element = {<CChat/>} />



      </Routes>
      </AuthProvider>
      
    </BrowserRouter>
    
  )
}

export default App;
