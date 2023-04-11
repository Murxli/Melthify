import './../Chat/Chat.css'
import sendIcon from './../../assets/send.svg';
import { updateDoc,arrayUnion, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from 'react';
import {useParams} from "react-router-dom";


const CChat = () =>{

    const {currentUser} = useAuth();
    const {id} = useParams();

    const formRef = useRef();
    const [form, setForm] = useState('');
    const [loading, setLoading] = useState(false);
    const chatbox = useRef(null);
    const docRef = doc(db, "communities", id);
    const [messages,setMessages] = useState([]);


    useEffect(()=>{
        async function name() {
            const docSnap = await getDoc(docRef);
            setMessages(docSnap.data().chats)
            console.log(messages);
        }
        name();
    },[form]);
    

    useEffect(() => chatbox.current.scrollIntoView(false), [messages]);



    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm(value);
    };



    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);

        if (form.trim() === "") {
            setLoading(false);
            setForm('');
            return;
        }

        try {  
                const membersRef = doc(db, 'communities', id)
                await updateDoc(membersRef, {
                    chats: arrayUnion({user:currentUser.email, message:form})
                });
                setForm('');

        }catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    return(
        <div className='chat md:px-0 sm:px-0 min-h-screen max-h-screen'>
            <div id="chat_container" className='msger'>
                <div className='msger-chat' ref={chatbox}>
                {messages?.map((message, index) => {
                    return(
                        <div key={index} >
                                <div className={message.user === currentUser.email ? 'msg right-msg' : 'msg left-msg'}>
                                    {console.log(currentUser.email, message.user)}
                                    <div className="msg-img" style={{backgroundImage: message.user===currentUser.email ? `url(${currentUser.photoURL})`:''}}></div>
                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">{message.user}</div>
                                            {console.log(message)}
                                        </div>
                                        <div className="msg-text">{message.message}</div>
                                    </div>
                                </div>
                        </div>)
                })}
                </div>
               
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className='px-3 w-full '>
                <textarea  name="prompt" onChange={handleChange} rows="2" cols="1" placeholder="Ask gopal..." value={form}/>
                <button type="submit" className='rounded focus:bg-inherit focus:outline-0'><img src={sendIcon} alt="send" /></button>
            </form>
        </div>
    )
}

export default CChat;