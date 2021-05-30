
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt, faVideo, faImage } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
export default function CreatePostComponent() {
    const dispatch = useDispatch();

    const handleToggleCreatePost = () => {
        dispatch({ type: "TOGGLE_MODAL" });
    }
    return (
        <div onClick={handleToggleCreatePost}>
            <input className="form-control status-form" type='text' placeholder="What's on your mind" />
            <div className="status-btn m-3 text-center">
                <button onClick={handleToggleCreatePost}><FontAwesomeIcon icon={faHeadphonesAlt} size="lg" /> <span className="p-2">Live</span></button>
                <button onClick={handleToggleCreatePost}><FontAwesomeIcon icon={faVideo} size="lg" /> <span className="p-2">Video</span></button>
                <button onClick={handleToggleCreatePost}><FontAwesomeIcon icon={faImage} size="lg" /> <span className="p-2">Image</span></button>
            </div>
        </div>

    )
}
