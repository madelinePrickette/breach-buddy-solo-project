import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './UserDetails.css';

function UserDetails() {

    const otherUser = useSelector(store => store.otherUserReducer)
    const [isFriend, setIsFriend] = useState(false)
    const friendsList = useSelector(store => store.friendsReducer)

    useEffect(() => {
        friendCheck();
    })

    const friendCheck = () => {
        friendsList.map((friend) => {
            if(friend.user_id_2 === otherUser.id){
                console.log(friend.user_id_2)
            } else {
                console.log(otherUser)
            }
        })
    }

    const handleFriendClick = () => {
        console.log('you and', otherUser.username, 'are now friends')
        setIsFriend(!isFriend);
    }

    const handleUnfriendClick = () => {
        console.log('you unfriended', otherUser.username)
        setIsFriend(!isFriend);
    }

    console.log(otherUser);

    // if otherUser is empty, then you are NOT friends

    // loop thru friendsReducer
    // if user_id_1 === myid AND user_id_2 === otherUser.id
    

    return(
        <>
            {!isFriend ?
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