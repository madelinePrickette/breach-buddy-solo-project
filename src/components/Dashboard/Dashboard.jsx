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

    const getFriends = () => {
        //console.log('getting friends...')

        dispatch({
            type: 'FETCH_FRIENDS'
        })
    }

    console.log('friends:', friends);
    return(
        <>
            <h3>Dashboard</h3>
            <h3>List of friends:</h3>
            {friends[0] ?
            <ul>
            {friends.map( (friend) => 
                <UserItem friend={friend}/>
            )}
            </ul>
            :
            <h3>You currently have no friends, go find some with the Find a Friend tab!</h3>
            }
        </>
    )
}

export default Dashboard;