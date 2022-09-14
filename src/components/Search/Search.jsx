import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem';

function Search() {

    useEffect(() => {
        getSearch();
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();
    const search = useSelector(state => state.allUsersReducer);

    const [rankFilter, setRankFilter] = useState('');
    const [gamemodeFilter, setGamemodeFilter] = useState('');

    const getSearch = () => {
        //console.log('getting friends...')

        dispatch({
            type: 'FETCH_SEARCH'
        })
    }

    //handling interaction with rank filter
    const rankFilterChange = (event) => {
        event.preventDefault();
            setRankFilter(event.target.value);
    }
    const handleRankFilter = (event) => {
        event.preventDefault();
        console.log('filtering by rank...')
        console.log('rank id:', rankFilter);

        if(rankFilter === 'Select a rank'){
            alert('No rank selected');
            return;
        } else {
            //Dispatch this value to db
            console.log('the filter worked!', rankFilter);
            dispatch({
                type: 'FETCH_RANK_FILTER',
                payload: rankFilter
            });
        }
    }

        //handling interaction with gamemode filter
        const gamemodeFilterChange = (event) => {
            event.preventDefault();
                setGamemodeFilter(event.target.value);
        }
        const handleGamemodeFilter = (event) => {
            event.preventDefault();
            console.log('filtering by gamemode...')
            console.log('gamemode id:', gamemodeFilter);

            if(gamemodeFilter === 'Select a gamemode'){
                alert('No gamemode selected');
                return;
            } else {
                //Dispatch this value to db
                console.log('the filter worked!', gamemodeFilter);
                dispatch({
                    type: 'FETCH_GAMEMODE_FILTER',
                    payload: gamemodeFilter
                });
            }
        }

    return(
        <>
            <h3 className='body-text'>Find a Potential Friend!</h3>
            <button onClick={getSearch}>Clear filters</button>
            <form onSubmit={handleRankFilter}>
                <select onChange={rankFilterChange}>
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
                <button>Filter</button>
            </form>
            <form onSubmit={handleGamemodeFilter}>
                <select onChange={gamemodeFilterChange}>
                    <option>Select a gamemode</option>
                    <option value='1'>All Modes</option>
                    <option value='2'>Unranked</option>
                    <option value='3'>Ranked</option>
                    <option value='4'>Quick Match</option>
                </select>
                <button>Filter</button>
            </form>
            <h3 className='body-text'>Search Result:</h3>
            <table>
                <tbody>
                    {search.map( (searchItem) => 
                        <SearchItem key={searchItem.id} searchItem={searchItem}/>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Search;