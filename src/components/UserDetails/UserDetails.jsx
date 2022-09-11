import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserDetails.css';

function UserDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherUser = useSelector(store => store.otherUserReducer);

    const friendsList = useSelector(store => store.friendsReducer); 
    //loop through for checking if theyre a friend

    useEffect(() => {
        console.log('this users id:', otherUser.id);
    })


    const handleFriendClick = () => {
        console.log('you and', otherUser.username, 'are now friends')

        dispatch({
            type: 'ADD_AS_FRIEND',
            payload: otherUser.id
        })
    }

    const handleUnfriendClick = () => {
        console.log('you unfriended', otherUser.username)
        
        dispatch({
            type: 'DELETE_FRIEND',
            payload: otherUser.id
        })
    }

    // if otherUser is empty, then you are NOT friends

    // loop thru friendsReducer
    // if user_id_1 === myid AND user_id_2 === otherUser.id
    

    return(
        <>
            <button onClick={handleFriendClick}>Friend</button>
            <button onClick={handleUnfriendClick}>Unfriend</button>
            <br></br>
            <img src={otherUser.picture} className="pfp"></img>
            <p>Rank: {otherUser.rank_name}</p>
            <h2>{otherUser.username}</h2>
            <p>Attacker: {otherUser.defender_name}</p>
            <p>Gamemode: {otherUser.gamemode_name}</p>
            <p>Availability: {otherUser.availability}</p>
            <p>Discord: {otherUser.discord}</p>
            <p>Bio: {otherUser.bio}</p>
        </>
    )
}

export default UserDetails;