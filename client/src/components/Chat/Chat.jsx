import './Chat.css'
import sendIcon from './../../assets/send.svg';
import { Timestamp, addDoc, collection, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';

const Chat = () =>{

    const {currentUser} = useAuth();
    const formRef = useRef();
    const [form, setForm] = useState('');
    const [loading, setLoading] = useState(false);

    const [messages] = useCollection(query(
        collection(db, 'users', currentUser.email, 'chats'),
        orderBy('createdAt', 'asc')
    ));


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
                console.log(body.data);
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
        }
    }
    return(
        <div className='chat'>
            <div id="chat_container">
                {/* <div className='convo'>
                    <p className='prompt message'>asfsdfsidhfds</p>
                    <p className='ai message'>sdgdhsjd</p>
                </div> */}
                {messages?.docs?.map((message, index) => {
                    return(
                    <div key={index} className='wrapper'>
                        <p className='prompt message'>{message.data().messages[0]}</p>
                        <p className='ai message'>{message.data().messages[1]}</p>
                    </div>)
                })}
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className='px-3 w-3/4'>
                <textarea  name="prompt" onChange={handleChange} rows="1" cols="1" placeholder="Ask gopal..." value={form}/>
                <button type="submit" className='rounded focus:bg-inherit focus:outline-0'><img src={sendIcon} alt="send" /></button>
            </form>
        </div>
    )
}

export default Chat;