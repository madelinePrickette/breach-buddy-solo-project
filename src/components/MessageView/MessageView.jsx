import './MessageView.css'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function MessageView() {

    const dispatch = useDispatch();
    const [newMessage, setNewMessage] = useState({message: ''})

    const messages = useSelector(store => store.messageReducer)
    
    useEffect( () => {
        getMessages();
    }, [])

    //GET MESSAGES
    const getMessages = () => {
        dispatch({
            type: 'FETCH_MESSAGE'
        })
    }

    //SEND A MESSAGE
    const handleMessageInput = (event) => {
        setNewMessage({...newMessage, message: event.target.value})
    }

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        console.log(newMessage);

        dispatch({
            type: 'ADD_MESSAGE',
            payload: newMessage
        })
    }

    return(
        <>
            <h3>Message View</h3>

            <div id="message-box">
                {/* {JSON.stringify(messages)} */}
                <ul>
                    {messages.map( (obj) => (
                        <li key={obj.id}>{obj.message}</li>
                    ))}
                </ul>
            </div>

            <input placeholder="message" onChange={handleMessageInput}/>
            <button onClick={handleMessageSubmit}>Submit</button>

            <input placeholder="room"/>
            <button>Join</button>
        </>
        
    )
}

export default MessageView;