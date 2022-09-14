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
            <li onClick={searchDetailClick} key={searchItem.id} className="body-text">{searchItem.username}</li>
        </>
    )
}

export default SearchItem;