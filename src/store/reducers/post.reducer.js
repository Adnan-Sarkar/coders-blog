import Types from '../constants'

const INITIAL_STATE = {
    posts: [],
    post: null,
    modal: false,
    error: null
}
const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CREATE_POST:
            // let newSite = {}
            // newSite['id'] = state.posts.length;
            // newSite = { ...action.payload }
            const updatedState = [action.payload, ...state.posts]
            return {
                ...state,
                posts: updatedState
            };
        case Types.DELETE_POST:
            const deletedData = state.posts.filter(site => site.id !== action.id);
            return {
                posts: deletedData
            };
        case Types.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case Types.FETCH_SINGLE_POST:
            return {
                ...state,
                post: action.payload
            };
        case "ADD_COMMENT_ON_POST":
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: action.payload
                }
            };

        case Types.POST_ERROR:
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

export default postReducer;