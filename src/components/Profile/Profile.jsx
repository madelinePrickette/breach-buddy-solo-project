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
    const [profileInfo, setProfileInfo] = useState({
        picture:'', 
        availability: '', 
        bio:'', 
        discord:'', 
        attacker_id:'', 
        defender_id:'', 
        gamemode_id:'', 
        rank_id:''
    })

    //Captured values -- no longer used
    // const [url, setUrl] = useState('');
    // const [rank, setRank] = useState('');
    // const [attacker, setAttacker] = useState('');
    // const [defender, setDefender] = useState('');
    // const [gamemode, setGamemode] = useState('');
    // const [availability, setAvailability] = useState('');
    // const [discord, setDiscord] = useState('');
    // const [bio, setBio] = useState('');

    const fetchProfile = () => {
        console.log('is this working'); //yes
        dispatch({
            type: 'FETCH_PROFILE'
        })
    }

    const [editing, setEditing] = useState(false)
    const handleEditClick = (event) => {
        event.preventDefault();
        setEditing(!editing);
    }

     //capture URL input
     const handlePicUrlInput = (event) => {
        //setUrl(event.target.value)
        setProfileInfo({...profileInfo, picture: event.target.value})
    }

    //rank selection capture
    const handleRankSelection = (event) => {
        //setRank(event.target.value)
        setProfileInfo({...profileInfo, rank_id: event.target.value})
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
        //setAttacker(event.target.value);
        setProfileInfo({...profileInfo, attacker_id: event.target.value})
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
        //setDefender(event.target.value);
        setProfileInfo({...profileInfo, defender_id: event.target.value})
    }

    //gamemode selection capture
    const handleGamemodeSelection = (event) => {
        //setGamemode(event.target.value)
        setProfileInfo({...profileInfo, gamemode_id: event.target.value})
    }

    //availability input capture
    const handleAvailabilityInput = (event) => {
        //setAvailability(event.target.value);
        setProfileInfo({...profileInfo, availability: event.target.value})
    }

    //discord input capture
    const handleDiscordInput = (event) => {
        //setDiscord(event.target.value);
        setProfileInfo({...profileInfo, discord: event.target.value})
    }

    //bio text capture
    const handleBioInput = (event) => {
        //setBio(event.target.value);
        setProfileInfo({...profileInfo, bio: event.target.value})
    }

    // console.log('your url:', url);
    // console.log('the rank you chose:', rank);
    // console.log('the attacker you chose:', attacker);
    // // console.log('the attackers:', attackers);
    // console.log('the defender you chose:', defender);
    // // console.log(defenders);
    // console.log('the gamemode you chose:', gamemode);
    // console.log('your availability:', availability);
    // console.log('your discord:', discord);
    // console.log('your bio:', bio)
    // console.log('clicked edit', editing);
    // console.log('THIS IS YOUR PROFILE INFO:', profile);

    const handleSaveClick = (event) => {
        event.preventDefault();
        console.log('your profile:', profileInfo);

        dispatch({
            type: 'SAVE_PROFILE',
            payload: profileInfo
        })
        setEditing(!editing);
    }

    return (
        <div>
            <>
                {editing ?
                    <div className='edit-container'>
                        <input placeholder="Picture Url" onChange={handlePicUrlInput} className='edit-pic-item'/>
                        <select onChange={handleRankSelection} className='edit-custom-select edit-rank-item'>
                            <option>Select Rank</option>
                            <option value='1'>Unranked</option>
                            <option value='2'>Copper</option>
                            <option value='3'>Bronze</option>
                            <option value='4'>Silver</option>
                            <option value='5'>Gold</option>
                            <option value='6'>Platinum</option>
                            <option value='7'>Diamond</option>
                            <option value='8'>Champion</option>
                        </select>
                        <h2 className='edit-username-item'>{profile[0].username}</h2>
                        <select onChange={handleAttackerSelection} className='edit-custom-select edit-attacker-item'>
                            <option>Select Attacker</option>
                            {attackers.map((attacker) =>
                                <option key={attacker.id} value={attacker.id}>{attacker.attacker_name}</option>
                            )}
                        </select>
                        <select onChange={handleDefenderSelection} className='edit-custom-select edit-defender-item'>
                            <option>Select Defender</option>
                            {defenders.map((defender) =>
                                <option key={defender.id} value={defender.id}>{defender.defender_name}</option>
                            )}
                        </select>
                        <select onChange={handleGamemodeSelection} className='edit-custom-select edit-gamemode-item'>
                            <option>Select Gamemode</option>
                            <option value='1'>All Modes</option>
                            <option value='2'>Unranked</option>
                            <option value='3'>Ranked</option>
                            <option value='4'>Quick Match</option>
                        </select>
                        <input placeholder="Availability" onChange={handleAvailabilityInput} className='edit-availability-item'/>
                        <input placeholder="Discord Name and #" onChange={handleDiscordInput} className='edit-discord-item'/>
                        <label htmlFor='bio' className='edit-bio-label-item'>Bio</label>
                        <textarea name='bio' onChange={handleBioInput} className='edit-bio-item'></textarea>
                        <button onClick={handleSaveClick} className='edit-save-item save-button-style'>SAVE</button>
                    </div>
                    :
                    <div  className='container'>
                        <button onClick={handleEditClick} className="item-edit button-style">EDIT</button>
                        {profile[0] ?
                            <>
                                <br></br>
                                <img src={profile[0].picture} className="pfp item-pic"></img>
                                <p className="body-text item-rank"><span className='light-gray-background'>Rank:</span> {profile[0].rank_name}</p>
                                <h1 className="body-text item-username username-font-size">{profile[0].username}</h1>
                                <p className="body-text item-attacker"><span className='light-gray-background'>Attacker:</span> {profile[0].attacker_name}</p>
                                <p className="body-text item-defender"><span className='light-gray-background'>Defender:</span> {profile[0].defender_name}</p>
                                <p className="body-text item-gamemode"><span className='light-gray-background'>Gamemode:</span> {profile[0].gamemode_name}</p>
                                <p className="body-text item-availability"><span className='light-gray-background'>Availability:</span> {profile[0].availability}</p>
                                <p className="body-text item-discord"><span className='light-gray-background'>Discord:</span> {profile[0].discord}</p>
                                <p className="body-text item-bio"><span className='light-gray-background'></span> {profile[0].bio}</p>
                            </>
                            :
                            <>
                                <p>Please fill out a profile!</p>
                            </>
                        }
                    </div>

                }

            </>
        </div>
    )
}

export default Profile;