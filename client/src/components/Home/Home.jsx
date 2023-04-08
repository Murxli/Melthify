import Icon from "./Icon";
import {Link} from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import cardimg1 from './../../assets/card1.jpg'
import cardimg2 from './../../assets/card2.jpg'

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
            <form onSubmit={handlelogout} className="absolute top-10 right-10">
                <button className="rounded p-2">Logout</button>
            </form>
            <div className="flex w-4/5 mx-auto justify-center gap-20 item-center">
                <Link to='/chat'>
                    <Icon imageUrl={cardimg1} title={'chatgpt'}/>
                </Link>
                <Link to='/consult'>
                    <Icon imageUrl={cardimg2} title={'meet with doctor'}/>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;