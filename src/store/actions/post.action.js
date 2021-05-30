import PostDataService from '../../services/post.service';

import Types from '../constants'

export const resetState = () => ({ type: Types.RESET });

export const postSuccess = payload => ({
    type: Types.FETCH_POSTS, payload, error: null
})
export const postCreate = payload => ({
    type: Types.CREATE_POST, payload, error: null
})
export const postError = error => ({
    type: Types.POST_ERROR, error
})

export const fetchSinglePost = payload => ({
    type: Types.FETCH_SINGLE_POST, payload
})

export const toggleCreatePostModal = () => ({ type: Types.TOGGLE_MODAL });

export const createPostAction = credentials => {
    return async dispatch => {
        try {
            resetState();
            const response = await PostDataService.createPost(credentials);
            console.log("post", response.post);
            // dispatch({
            //     type: Types.ADD_POST_TO_USER,
            //     payload: response.post
            // })
            dispatch(postCreate(response.post));
            dispatch(toggleCreatePostModal())
        } catch (error) {
            dispatch(postError(error.message))
        }
    }
}

export const readAllPostAction = () => {
    return async dispatch => {
        try {
            resetState();
            const response = await PostDataService.readAllPost();
            console.log("response", response);
            console.log("posts", response.posts);
            dispatch(postSuccess(response.posts))
        } catch (error) {
            dispatch(postError(error.message))
        }
    }
}

export const getSinglePostAction = postId => {
    return async dispatch => {
        try {
            resetState();
            const response = await PostDataService.getSinglePost(postId);
            console.log("fetchSinglePost", response.post);
            dispatch(fetchSinglePost(response.post))
        } catch (error) {
            dispatch(postError(error.message))
        }
    }
}
export const updatePostAction = (postId, credentials) => {
    return async dispatch => {
        try {
            resetState();
            const response = await PostDataService.postSignup(credentials);
            console.log("user", response);
            sessionStorage.setItem("token", response.access_token)
            dispatch(postSuccess(response.user))
        } catch (error) {
            dispatch(postError(error.message))
        }
    }
}


export const deletePostAction = () => {
    return async (dispatch, getState) => {
        try {
            resetState();
            const response = await PostDataService.getLogout();
            console.log(response.message);
            dispatch({ type: Types.DELETE_POST });
        } catch (error) {
            dispatch(postError(error.message))
        }
    }
}