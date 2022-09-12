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

    const getSearch = () => {
        //console.log('getting friends...')

        dispatch({
            type: 'FETCH_SEARCH'
        })
    }

    console.log('Search result:', search);
    return(
        <>
            <h3 className='body-text'>Find a Potential Friend!</h3>
            <h3 className='body-text'>Search Result:</h3>
            <ul className='no-bull'>
            {search.map( (searchItem) => 
                <SearchItem key={searchItem.id} searchItem={searchItem}/>
            )}
            </ul>
        </>
    )
}

export default Search;