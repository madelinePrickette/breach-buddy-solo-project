import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Profile() {

    useEffect(() => {
        fetchProfile();
    }, []);

    const dispatch = useDispatch();
    const profile = useSelector(store => store.profile)

    const fetchProfile = () => {
        dispatch({
            type: 'FETCH_PROFILE'
        })
    }

    return (
        <>
            <h3>Profile</h3>
            <button>Edit</button>
            <img></img>
            <p>rank here</p>
            <p>username here</p>
            <p>attacker here</p>
            <p>defender here</p>
            <p>gamemode here</p>
            <p>availability here</p>
            <p>discord here</p>
            <p>bio here</p>

            <input placeholder="rank" />
            <input placeholder="availability" />
            <input placeholder="discord link" />
            <textarea placeholder="bio" />
        </>
    )
}

export default Profile;