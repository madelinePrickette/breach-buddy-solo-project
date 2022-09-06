import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css'

function Profile() {

    useEffect(() => {
        fetchProfile();
    }, []);

    const dispatch = useDispatch();
    const profile = useSelector(store => store.profileReducer)

    const fetchProfile = () => {
        console.log('is this working'); //yes
        dispatch({
            type: 'FETCH_PROFILE'
        })
    }

    console.log('THIS IS YOUR PROFILE INFO:', profile);
    return (
        <>
            <h3>Profile</h3>
            <button>Edit</button>
            
            <>
                {profile[0] ?
                <>
                    <br></br>
                    <img src={profile[0].picture} className="pfp"></img>
                    <p>Rank {profile[0].rank_name}</p>
                    <h2>{profile[0].username}</h2>
                    <p>Attacker {profile[0].attacker_name}</p>
                    <p>Defender {profile[0].defender_name}</p>
                    <p>Gamemode {profile[0].gamemode_name}</p>
                    <p>{profile[0].availability}</p>
                    <p>{profile[0].discord}</p>
                    <p>{profile[0].bio}</p>
                </>
                :
                <>
                    <p>Please fill out a profile!</p>
                </>
                }   
            </>
        </>
    )
}

export default Profile;