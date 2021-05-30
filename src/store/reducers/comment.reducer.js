import Types from '../types/comment.types'

const INITIAL_STATE = {
    comments: [],
    comment: null,
    modal: false,
    error: null
}
const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CREATE_COMMENT:
            // let newSite = {}
            // newSite['id'] = state.comments.length;
            // newSite = { ...action.payload }
            const updatedState = [action.payload, ...state.comments]
            return {
                ...state,
                comments: updatedState
            };
        case Types.DELETE_COMMENT:
            const deletedData = state.comments.filter(site => site.id !== action.id);
            return {
                comments: deletedData
            };
        case Types.FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case Types.FETCH_SINGLE_COMMENT:
            return {
                ...state,
                comment: action.payload
            };

        case Types.COMMENT_ERROR:
            const error = action.error?.message || action.error;
            return { ...state, error };

        case "TOGGLE_MODAL":
            return {
                ...state,
                modal: !state.modal
            };

        default:
            return state;
    }
}

export default commentReducer;