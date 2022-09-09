import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './UserDetails.css';

function UserDetails() {

    const otherUser = useSelector(state => state.otherUserReducer)
    const [friend, setFriend] = useState(false)

    useEffect(() => {
        friendCheck();
    })

    const friendCheck = () => {

    }

    const handleFriendClick = () => {
        console.log('you and', otherUser.username, 'are now friends')
        setFriend(!friend);
    }

    const handleUnfriendClick = () => {
        console.log('you unfriended', otherUser.username)
        setFriend(!friend);
    }

    console.log(otherUser);

    // if otherUser is empty, then you are NOT friends

    // loop thru friendsReducer
    // if user_id_1 === myid AND user_id_2 === otherUser.id


    return(
        <>
            {!friend ?
                <button onClick={handleFriendClick}>Friend</button>
            :
                <button onClick={handleUnfriendClick}>Unfriend</button>
            }
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