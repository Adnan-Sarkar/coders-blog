import { Container, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function BioReusableComponent(props) {
    const { register, handleSubmit } = useForm();
    const [editable, setEditable] = useState(false);
    let profile = props.profile;
    if (!profile) {
        return <h2 className="text-teal text-center my-5"> Profile Not Found </h2>
    }

    const onSubmit = (data) => {
        profile.bio = data.bio

        setEditable(false)
    };

    return (
        <>
            <Container className="text-center mt-3 py-4">
                <h3>
                    <strong>{profile.name}</strong>
                    {profile.nickname && `(${profile.nickname})`}
                </h3>
                <p className="text-muted">
                    {profile.bio}
                </p>

                <button
                    onClick={() => setEditable(true)}
                    className="btn btn-info">Edit</button>
                <hr />
            </Container>
            <Modal
                show={editable}
                onHide={() => setEditable(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Update Bio
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        className="p-5 d-block"

                        onSubmit={handleSubmit(onSubmit)}>

                        <textarea
                            {...register("bio")}
                            placeholder="Bio"
                            className="form-control"
                            defaultValue={profile.bio} />

                        <input type="submit" className="btn btn-info mt-5" value="Update" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
