
import axios from "./axios";

class CommentDataService {
    async createComment(credentials) {
        try {
            const token = sessionStorage.getItem("token") || null;
            let { data } = await axios({
                method: 'post',
                url: `/api/comments/create`,
                data: credentials,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async readAllCommentsByPost(postId) {
        try {
            let { data } = await axios({
                method: 'post',
                url: `/api/comments/read/postId`
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async readAllComment() {
        try {
            let { data } = await axios({
                method: 'get',
                url: `/api/posts/read`
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async getSingleComment(postId) {
        try {
            let { data } = await axios({
                method: 'get',
                url: `/api/posts/show/${postId}`
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async updateComment(postId, credentials) {
        try {
            let { data } = await axios({
                method: 'put',
                url: `/api/posts/update/${postId}`,
                data: credentials
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async deleteComment(postId, credentials) {
        try {
            let { data } = await axios({
                method: 'delete',
                url: `/api/posts/delete/${postId}`,
                data: credentials
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
}

// eslint-disable-next-line 
export default new CommentDataService();