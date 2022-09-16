import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './UserDetails.css';

function UserDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const otherUser = useSelector(store => store.otherUserReducer);
    const user = useSelector(store => store.user);
    const friendsList = useSelector(store => store.friendsReducer); 
    //loop through for checking if theyre a friend
    let id = Number(useParams().id);

    const [friend, setFriend] = useState(false)

    useEffect(() => {
        // console.log('this users id:', otherUser.id);
        friendCheck(id);
        onRefresh(id);
    }, []);

    const onRefresh = (id) => {

        console.log('id from onRefresh:', id);

        dispatch({
            type: 'FETCH_OTHER_PROFILE',
            payload: {id: id}
        })
    }

    const handleFriendClick = () => { //POST
        console.log('you and', otherUser.username, 'are now friends')

                setFriend(!friend);
                dispatch({
                    type: 'ADD_AS_FRIEND',
                    payload: otherUser.id
                })
    }

    const handleUnfriendClick = () => { //DELETE
        console.log('you unfriended', otherUser.username)
        
        setFriend(!friend);
        dispatch({
            type: 'DELETE_FRIEND',
            payload: otherUser.id
        })
    }

    const friendCheck = (selectedId) => {
        // console.log('SELECTED', selectedId);
        friendsList.map( (friend) => {
            console.log('SELECTED', selectedId);
            // console.log('friendsList:', friendsList); //list of friends with their and my id: user_id_1 => theirs. ---- user_id_2 => mine.
            console.log('friend.user_id_1:', friend.user_id_1); //List of all my friend's ids.
            // console.log('otherUser info from reducer:', otherUser);
            // console.log('otherUser.id', otherUser.id); //The id of the person you clicked on. (squ1d1y is 14)
            // console.log('user.id',user.id);
            // console.log('friend.user_id_2 (always us)', friend.user_id_2);
            if( selectedId === friend.user_id_1 ){
                console.log("THIS IS THE PERSON--------------------", friend.user_id_1);
                // if it's THIS person
                if((otherUser.id === friend.user_id_1) && (user.id === friend.user_id_2)){
                    //console.log('the user you clicked on is in the friends(user_user) table.', friend.user_id_1, '=', otherUser.id);
                    console.log('YOURE FRIENDS!!!!!!!!!');
                    setFriend(true);
                    
                } else {
                    console.log('not friends.');
                    setFriend(false);
                }
            }

           

            
        })
    }

    //Friend list looks like user_id_1 is their id, and user_id_2 is my id.

    // if otherUser is empty, then you are NOT friends

    // loop thru friendsReducer
    // if user_id_1 === myid AND user_id_2 === otherUser.id
    

    return(
        <>
            {friend ?
            <>
                <button onClick={handleUnfriendClick}>Unfriend</button><p className='body-text'>you are friends</p>
            </>
            :
            <>
                <button onClick={handleFriendClick}>Friend</button><p className='body-text'>you are NOT friends</p>
            </>
            }
            
            <br></br>
            <img src={otherUser.picture} className="pfp"></img>
            <p className='body-text'>Rank: {otherUser.rank_name}</p>
            <h2 className='body-text'>{otherUser.username}</h2>
            <p className='body-text'>Attacker: {otherUser.defender_name}</p>
            <p className='body-text'>Gamemode: {otherUser.gamemode_name}</p>
            <p className='body-text'>Availability: {otherUser.availability}</p>
            <p className='body-text'>Discord: {otherUser.discord}</p>
            <p className='body-text'>Bio: {otherUser.bio}</p>
        </>
    )
}

export default UserDetails;