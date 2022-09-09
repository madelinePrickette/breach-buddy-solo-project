import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function UserDetails() {

    const otherUser = useSelector(state => state.otherUserReducer)

    console.log(otherUser);
    return(
        <>
            <h3>Other User's Profile</h3>
                <img src={otherUser.picture}></img>
                <p>{otherUser.username}</p>
        </>
    )
}

export default UserDetails;