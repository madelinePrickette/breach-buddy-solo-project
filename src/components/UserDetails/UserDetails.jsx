import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function OtherUser() {

    UseEffect(() => {
        getOtherUser();
    })

    const dispatch = useDispatch();
    
    const getOtherUser = () => {
        console.log('in get other user function...');
    }

    return(
        <>
            <h3>Other User's Profile</h3>
        </>
    )
}

export default OtherUser;