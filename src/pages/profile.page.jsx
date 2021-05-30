import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostListComponent from "../components/Shared/Post/Posts.component";
import MainAppLayout from "../layout/MainApp.layout";


export default function ProfilePage() {
    const authUser = useSelector(state => state.auth.user);
    const posts = useSelector(state => state.post.posts);

    const upvoteHandler = postId => {
        alert("UP" + postId)
    }
    const downvoteHandler = postId => {
        alert("Downvote" + postId)

    }
    return (
        <MainAppLayout>
            <Container className="py-4">
                <Row>
                    <Col xs={12} md={5}>
                        <h3> {authUser?.name} </h3>
                        <h2 className="badge badge-success"> {authUser?.role} </h2>
                        <h5> {authUser?.email} </h5>
                    </Col>
                    <Col xs={12} md={7} className="m-0 p-0">

                        <PostListComponent
                            data={posts}
                            handleUpvote={upvoteHandler}
                            handleDownvote={downvoteHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </MainAppLayout>
    )
}