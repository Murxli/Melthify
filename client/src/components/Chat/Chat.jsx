import './Chat.css'
import sendIcon from './../../assets/send.svg';
import { Timestamp, addDoc, collection, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';

import aiIcon from './../../assets/aiicon.png'

const Chat = () =>{

    const {currentUser} = useAuth();
    const formRef = useRef();
    const [form, setForm] = useState('');
    const [loading, setLoading] = useState(false);
    const chatbox = useRef(null);
    const [messages] = useCollection(query(
        collection(db, 'users', currentUser.email, 'chats'),
        orderBy('createdAt', 'asc')
    ));

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
            const response = await fetch("http://localhost:3080",{
                method:'post',
                body:JSON.stringify({form:form}),
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            var body = await response.json()
            if (response.ok) {
                // console.log(body.data);
                var res = body.data.trim();
                const doc = await addDoc(collection(db,'users',currentUser.email,'chats'),{
                    messages:[form,res],
                    createdAt: Timestamp.now()
                })
                setForm('');

            }else{
                return;
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('backend not connected')
        }
    }
    return(
        <div className='chat md:px-0 sm:px-0 min-h-screen max-h-screen'>
            <div id="chat_container" className='msger'>
                <div className='msger-chat' ref={chatbox}>
                {messages?.docs.length === 0 && <p className='flex flex-col justify-center items-center'>start you chat with gopal and relax your mind</p>}

                {messages?.docs?.map((message, index) => {
                    return(
                        <div key={index} >
                            <div>
                                <div className="msg right-msg">
                                    <div className="msg-img" style={{backgroundImage: `url(${currentUser.photoURL})`}}></div>
                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">You</div>
                                        </div>
                                        <div className="msg-text">{message.data().messages[0]}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="msg left-msg">
                                    <div className="msg-img" style={{backgroundImage: `url(${aiIcon})`}}></div>
                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">Gopal</div>
                                        </div>
                                        <div className="msg-text">{message.data().messages[1]}</div>
                                    </div>
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

export default Chat;