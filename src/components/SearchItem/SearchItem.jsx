import {useHistory} from 'react-router-dom';
import {useDispatch} from'react-redux';

function SearchItem({searchItem}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const searchDetailClick = () => {
        history.push(`/userdetails/${searchItem.id}`);

        dispatch({
            type: 'FETCH_OTHER_PROFILE',
            payload: {id: searchItem.id}
        })
    }

    return(
        <>
            <p onClick={searchDetailClick} key={searchItem.id}>{searchItem.username} {searchItem.availability}</p>
        </>
    )
}

export default SearchItem;