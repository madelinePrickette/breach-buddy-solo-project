import {useHistory} from 'react-router-dom';
import {useDispatch} from'react-redux';

function UserItem({friend}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFriendClick = () => {
        history.push(`/UserDetails/${friend.user_id_1}`);

        dispatch({
            type: 'FETCH_OTHER_PROFILE',
            payload: {id: friend.user_id_1}
        })
    }

    return(
        <>
            <li key={friend.user_id_1} onClick={handleFriendClick}>{friend.username}</li>
        </>
    )
}

export default UserItem;