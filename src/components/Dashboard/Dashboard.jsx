import './Dashboard.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserItem from '../UserItem/UserItem';

function Dashboard() {

    useEffect(() => {
        getFriends();
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();
    const friends = useSelector(state => state.friendsReducer);
    const [editing, setEditing] = useState(false)

    const getFriends = () => {
        //console.log('getting friends...')

        dispatch({
            type: 'FETCH_FRIENDS'
        })
    }

    const handleEditClick = () => {
        //console.log('edit clicked');
        setEditing(!editing);
    }

    {editing?
        console.log('delete buttons are showing, edit status is:', editing)
        :
        console.log('buttons are hidden, editing status is:', editing);
    }

    console.log('friends:', friends);
    return(
        <>
            <h3 className='body-text'>Dashboard</h3>
            <h3 className='body-text'>List of friends:</h3>
            {editing?
            <button onClick={handleEditClick}>Done</button>
            :
            <button onClick={handleEditClick}>Edit</button>
            }
            {friends[0] ?
            <ul className='no-bull'>
            {friends.map( (friend) => 
                <UserItem key={friend.user_id_1} friend={friend} editing={editing}/>
            )}
            </ul>
            :
            <h3>You currently have no friends, go find some with the Find a Friend tab!</h3>
            }
        </>
    )
}

export default Dashboard;