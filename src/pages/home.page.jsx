import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import MainAppLayout from "../layout/MainApp.layout";
import { readAllPostAction } from "../store/actions/post.action";

export default function HomePage() {
    const posts = useSelector(state => state.post.posts);
    const dispatch = useDispatch();
    const fetchPosts = () => {
        dispatch(readAllPostAction());
    }
    // eslint-disable-next-line
    useEffect(fetchPosts, [])
    return (
        <MainAppLayout>
            <NewsFeed blogs={posts} />
        </MainAppLayout>
    );
}
