import { Container, Dropdown, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
const coverPicbackground = (url) => ({
    background: `url(${url}) no-repeat center`,
});

export default function PictureReusableComponent({
    profile
}) {
    const profilePicRef = useRef()
    const { register, handleSubmit } = useForm();
    const [profilePic, setprofilePic] = useState(false);
    const [coverPic, setCoverPic] = useState(false);
    const [profilePicImage, setProfileImage] = useState();
    const [coverPicImage, setCoverImage] = useState();


    const changeProfilePic = (data) => {
        profile.profilePic = profilePicImage

        setprofilePic(false)
    };
    const changeCoverPic = (data) => {
        profile.coverPic = coverPicImage
        setprofilePic(false)
    };
    const handleChangeProfilePic = () => {
        console.dir(profilePicRef);
        setprofilePic(true)
    }
    const handleChangeCoverPic = () => setCoverPic(true)
    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        let base64String = btoa(binaryString);
        base64String = `data:image/png;base64,${base64String}`
        setProfileImage(base64String);
    }
    const handleImage = e => {
        let file = e.target.files[0];
        let fileIsImage = file.type.includes('image/');

        file.type.split('/') === '' && setProfileImage(file);
        let extension = /(png|gif|jpg|jpeg|webp)/i.test(file.type.split('/')[1])
        if (!fileIsImage || !extension) {
            alert('File Format Is Invalid . Please Upload in image');
            setProfileImage(undefined)
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
            console.log(reader)
        }
    }
    return (
        <Container
            className="cover-pic-section"
            style={coverPicbackground(profile.coverPic)}
        >
            <div className="profile-pic-section">
                <img src={profile.profilePic} alt={profile.name} />
                <Dropdown className="img-dropdown">
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        <FontAwesomeIcon icon={faCamera} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >
                            <FontAwesomeIcon icon={faCamera} />
                                    View Profile Picture</Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleChangeProfilePic()}
                        >
                            <FontAwesomeIcon icon={faCamera} />
                                    Update Profile Picture</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Dropdown className="cover-dropdown">
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                    <FontAwesomeIcon icon={faCamera} />
                            Change Cover Photo
                            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >
                        <FontAwesomeIcon icon={faCamera} />
                                View Profile Picture</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => handleChangeCoverPic()}>
                        <FontAwesomeIcon icon={faCamera} />
                                Update Profile Picture</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Modal
                show={profilePic}
                onHide={() => setprofilePic(false)}
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
                        onSubmit={handleSubmit(changeProfilePic)}>
                        <img
                            src={profilePicImage}
                            className="w-75 img-thumbnail"
                            alt={profile.name} />
                        <input
                            type="file"
                            onChange={handleImage}
                            ref={profilePicRef}
                            name="profilePic"
                            id="profilePic" />

                        <input type="submit" className="btn btn-info mt-5" value="Update" />
                    </form>
                </Modal.Body>
            </Modal>

        </Container>
    )
}
