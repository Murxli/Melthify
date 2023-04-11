import Icon from "./Icon";
import {Link} from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import NavBar from './../Navigation/Navbar'

import cardimg1 from './../../assets/card1.jpg'
import cardimg2 from './../../assets/card2.jpg'
import cardimg3 from './../../assets/community.jpg'

const Home = () => {
    const {currentUser, logout} = useAuth();
    const Navigate = useNavigate();
    useEffect(()=>{
        console.log(currentUser);
          if(!currentUser){
            Navigate('/login');
          }
      }, [])

      const handlelogout = () =>{
        logout();
        Navigate('/');
      }
    return(
        <div className="app">
            <NavBar page='app' onHandleLogout = {handlelogout}/>
            <div className="grid grid-cols-3 mx-auto justify-center gap-20 item-center max-w-5xl md:">
                <Link to='/chat'>
                    <Icon imageUrl={cardimg1} title={'chatgpt'}/>
                </Link>
                <Link to='/consult'>
                    <Icon imageUrl={cardimg2} title={'meet with doctor'}/>
                </Link>
                <Link to='/community'>
                    <Icon imageUrl={cardimg3} title={'join a community'}/>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;