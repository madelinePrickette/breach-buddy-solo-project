import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Profile.css'

function Profile() {

    useEffect(() => {
        fetchProfile();
        getAttackers();
        getDefenders();
    }, []);

    const dispatch = useDispatch();
    const profile = useSelector(store => store.profileReducer);
    const attackers = useSelector(store => store.attackerReducer);
    const defenders = useSelector(store => store.defenderReducer);

    //We will send this package into the server.

    //Captured values
    const [url, setUrl] = useState('');
    const [rank, setRank] = useState('');
    const [attacker, setAttacker] = useState('');
    const [defender, setDefender] = useState('');
    const [gamemode, setGamemode] = useState('');
    const [availability, setAvailability] = useState('');
    const [discord, setDiscord] = useState('');
    const [bio, setBio] = useState('');

    const fetchProfile = () => {
        console.log('is this working'); //yes
        dispatch({
            type: 'FETCH_PROFILE'
        })
    }

    const [editing, setEditing] = useState(false)
    const handleEditClick = () => {
        setEditing(!editing);
    }

     //capture URL input
     const handlePicUrlInput = (event) => {
        setUrl(event.target.value)
    }

    //rank selection capture
    const handleRankSelection = (event) => {
        setRank(event.target.value)
    }

    //getting the attackers from the db
    const getAttackers = () => {
    axios.get('/api/attackerdata')
        .then( (response) => {
            dispatch({
                type: 'SET_ATTACKER',
                payload: response.data
            })
        }).catch( (err) => {
            console.error('Error with axios.get in profile.jsx', err)
        })
    }
    const handleAttackerSelection = (event) => {
        setAttacker(event.target.value);
    }

    //getting the defenders from the db
    const getDefenders = () => {
        axios.get('/api/defenderdata')
            .then( (response) => {
                dispatch({
                    type: 'SET_DEFENDER',
                    payload: response.data
                })
            }).catch( (err) => {
                console.error('Error with axios.get in profile.jsx', err)
            })
    }
    const handleDefenderSelection = (event) => {
        setDefender(event.target.value);
    }

    //gamemode selection capture
    const handleGamemodeSelection = (event) => {
        setGamemode(event.target.value)
    }

    //availability input capture
    const handleAvailabilityInput = (event) => {
        setAvailability(event.target.value);
    }

    //discord input capture
    const handleDiscordInput = (event) => {
        setDiscord(event.target.value);
    }

    //bio text capture
    const handleBioInput = (event) => {
        setBio(event.target.value);
    }

    console.log('your url:', url);
    console.log('the rank you chose:', rank);
    console.log('the attacker you chose:', attacker);
    // console.log('the attackers:', attackers);
    console.log('the defender you chose:', defender);
    // console.log(defenders);
    console.log('the gamemode you chose:', gamemode);
    console.log('your availability:', availability);
    console.log('your discord:', discord);
    console.log('your bio:', bio)
    // console.log('clicked edit', editing);
    // console.log('THIS IS YOUR PROFILE INFO:', profile);

    return (
        <>
            <h3>Profile</h3>
            <>
                {editing ?
                    <>
                        <button onClick={handleEditClick}>Save</button>
                        <input placeholder="picture url" onChange={handlePicUrlInput}/>
                        <select onChange={handleRankSelection}>
                            <option>Select a rank</option>
                            <option value='1'>Unranked</option>
                            <option value='2'>Copper</option>
                            <option value='3'>Bronze</option>
                            <option value='4'>Silver</option>
                            <option value='5'>Gold</option>
                            <option value='6'>Platinum</option>
                            <option value='7'>Diamond</option>
                            <option value='8'>Champion</option>
                        </select>
                        <h2>{profile[0].username}</h2>
                        <select onChange={handleAttackerSelection}>
                            <option>Attacker Main</option>
                            {attackers.map((attacker) =>
                                <option key={attacker.id} value={attacker.id}>{attacker.attacker_name}</option>
                            )}
                        </select>
                        <select onChange={handleDefenderSelection}>
                            <option>Defender Main</option>
                            {defenders.map((defender) =>
                                <option key={defender.id} value={defender.id}>{defender.defender_name}</option>
                            )}
                        </select>
                        <select onChange={handleGamemodeSelection}>
                            <option>Select a gamemode</option>
                            <option value='1'>All Modes</option>
                            <option value='2'>Unranked</option>
                            <option value='3'>Ranked</option>
                            <option value='4'>Quick Match</option>
                        </select>
                        <input placeholder="availability" onChange={handleAvailabilityInput}/>
                        <input placeholder="discord name and #" onChange={handleDiscordInput}/>
                        <label htmlFor='bio'>Bio:</label>
                        <textarea name='bio'></textarea>
                    </>
                    :
                    <>
                        <button onClick={handleEditClick}>Edit</button>
                        {profile[0] ?
                            <>
                                <br></br>
                                <img src={profile[0].picture} className="pfp"></img>
                                <p>Rank: {profile[0].rank_name}</p>
                                <h2>{profile[0].username}</h2>
                                <p>Attacker: {profile[0].attacker_name}</p>
                                <p>Defender: {profile[0].defender_name}</p>
                                <p>Gamemode: {profile[0].gamemode_name}</p>
                                <p>Availability: {profile[0].availability}</p>
                                <p>Discord: {profile[0].discord}</p>
                                <p>Bio: {profile[0].bio}</p>
                            </>
                            :
                            <>
                                <p>Please fill out a profile!</p>
                            </>
                        }
                    </>

                }

            </>
        </>
    )
}

export default Profile;