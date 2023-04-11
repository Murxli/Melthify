import { updateDoc,arrayUnion, collection, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase.config';
import {useCollection} from 'react-firebase-hooks/firestore';
import { useAuth } from "../../contexts/AuthContext";
import CommCard from './CommCard';

const Community = () =>{
    const {currentUser} = useAuth();

    const [communities] = useCollection(query(
        collection(db, 'communities'),
        orderBy('createdAt', 'asc')
    ));

    const handleJoinComm = async(e) =>{
        console.log(e);
        const membersRef = doc(db, 'communities', `${e.target.className}`)
        await updateDoc(membersRef, {
            members: arrayUnion(currentUser.email)
        });

    }

    // console.log(communities?.docs);
    return(
    <div className='communities max-w-4xl m-auto'>
        <h2 className='text-bold' style={{fontSize:'2rem',fontWeight:'bolder', marginBottom:'3rem'}}>Join a community</h2>
        <ul>
            {communities?.docs?.map((element, index) => {
                return(
                    <li key={index} className='p-2'>
                        <CommCard imageURL={element.data().imageURL} id={element.data().id} name={element.data().name} description={element.data().description} user={currentUser.email} members={element.data().members} join={handleJoinComm}/>
                    </li>)
            })}
        </ul>
    </div>)
}

export default Community;