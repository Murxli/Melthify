import './Chat.css'
import sendIcon from './../../assets/send.svg'
const Chat = () =>{
    return(
        <div className='chat'>
            <div id="chat_container"></div>
            <form>
                <textarea name="prompt" rows="1" cols="1" placeholder="Ask codex..."></textarea>
                <button type="submit"><img src={sendIcon} alt="send" /></button>
            </form>

        </div>
    )
}

export default Chat;