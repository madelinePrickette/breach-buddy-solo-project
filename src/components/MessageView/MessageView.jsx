import './MessageView.css'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function MessageView() {

    const [newMessage, setNewMessage] = useState('');

    const handleMessageChange = (event) => {
        setNewMessage(event.target.value)

        console.log(newMessage); // this should show the changing value
    }

    return(
        <>
            <h3>Message View</h3>

            <div id="message-box"></div>

            <label htmlFor="message-input">Message</label>
            <input type="text" placeholder="message" onChange={handleMessageChange}/>
            <button>Submit</button>

            <label htmlFor="room-input">Room</label>
            <input type="text" placeholder="room"/>
            <button>Join</button>
        </>
        
    )
}

export default MessageView;