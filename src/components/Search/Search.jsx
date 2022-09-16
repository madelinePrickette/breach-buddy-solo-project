import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem';

function Search() {

    useEffect(() => {
        clearFilterChange();
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();
    const search = useSelector(state => state.allUsersReducer);

    const [filters, setFilters] = useState({rankId: 0, gamemodeId: 0});

    const clearFilterChange = () => {
        //console.log('getting friends...')
        setFilters({...filters, rankId: 0, gamemodeId: 0})

        dispatch({
            type: 'FETCH_FILTER',
            payload: {rankId: 0, gamemodeId: 0}
        });
    }

    //handling interaction with rank filter
    const filterRankChange = (event) => {
        event.preventDefault();
            setFilters({...filters, rankId: event.target.value});
    }
    //handling interaction with gamemode filter
    const filterGamemodeChange = (event) => {
        event.preventDefault();
            setFilters({...filters, gamemodeId: event.target.value});
    }
    const handleFilter = (event) => {
        event.preventDefault();
        console.log('filtering...')
        console.log('Filters:', filters);
            //Dispatch this value to db

        dispatch({
            type: 'FETCH_FILTER',
            payload: filters
        });
    }

    console.log('filters:', filters);
        return(
        <>
            <h3 className='body-text'>Find a Potential Friend!</h3>
            <button onClick={clearFilterChange}>Clear filters</button>
            <form onSubmit={handleFilter}>
                <select onChange={filterRankChange}>
                    <option value='0'>Select a rank</option>
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
            <form onSubmit={handleFilter}>
                <select onChange={filterGamemodeChange}>
                    <option value='0'>Select a gamemode</option>
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