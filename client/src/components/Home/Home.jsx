import Icon from "./Icon";
import {Link} from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

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
                    <Icon imageUrl={'https://via.placeholder.com/200x200'} title={'chatgpt'}/>
                </Link>
                <Link to='/consult'>
                    <Icon imageUrl={'https://via.placeholder.com/200x200'} title={'meet with doctor'}/>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;