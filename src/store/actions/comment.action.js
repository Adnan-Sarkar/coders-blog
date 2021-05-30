import CommentDataService from '../../services/comment.service';

import Types from '../types/comment.types'

export const resetState = () => ({ type: Types.RESET });

export const commentSuccess = payload => ({
    type: Types.FETCH_COMMENTS, payload, error: null
})
export const commentCreate = payload => ({
    type: Types.CREATE_COMMENT, payload, error: null
})
export const commentError = error => ({
    type: Types.COMMENT_ERROR, error
})

export const fetchSinglePost = payload => ({
    type: Types.FETCH_SINGLE_COMMENT, payload
})

export const toggleCreatePostModal = () => ({ type: Types.TOGGLE_MODAL });

export const createCommentAction = credentials => {
    return async dispatch => {
        try {
            resetState();
            const response = await CommentDataService.createComment(credentials);
            dispatch({
                type: "ADD_COMMENT_ON_POST",
                payload: response
            });
        } catch (error) {
            dispatch(commentError(error.message))
        }
    }
}

export const getSingleCommentByPostction = commentId => {
    return async dispatch => {
        try {
            resetState();
            const response = await CommentDataService.getSinglePost(commentId);
            console.log("fetchSinglePost", response.comment);
            dispatch(fetchSinglePost(response.comment))
        } catch (error) {
            dispatch(commentError(error.message))
        }
    }
}

export const deletePostAction = () => {
    return async (dispatch, getState) => {
        try {
            resetState();
            const response = await CommentDataService.getLogout();
            console.log(response.message);
            dispatch({ type: Types.DELETE_COMMENT });
        } catch (error) {
            dispatch(commentError(error.message))
        }
    }
}