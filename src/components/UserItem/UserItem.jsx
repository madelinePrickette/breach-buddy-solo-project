import {useHistory} from 'react-router-dom';
import {useDispatch} from'react-redux';
import userDetails from '../UserDetails/UserDetails';

function UserItem({friend, editing}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFriendClick = () => {
        history.push(`/userdetails/${friend.user_id_1}`);

        dispatch({
            type: 'FETCH_OTHER_PROFILE',
            payload: {id: friend.user_id_1}
        })
    }

    const handleDeleteClick = () => {
        console.log(friend.user_id_1);

        dispatch ({
            type: 'DELETE_FRIEND',
            payload: friend.user_id_1
        })
    }

    //friend.user_id_1 is ALWAYS THEIR/ YOUR FRIEND'S ID.
    //friend.user_id_2 is ALWAYS YOUR ID.
    console.log('editing status:', editing)
    return(
        <>
            {editing?
            <li key={friend.user_id_1}><h3 onClick={handleFriendClick} className='body-text'>{friend.username}</h3><button onClick={handleDeleteClick}>Unfriend</button></li>
            :
            <li key={friend.user_id_1} onClick={handleFriendClick} className='body-text'>{friend.username}</li>
            }
        </>
    )
}

export default UserItem;