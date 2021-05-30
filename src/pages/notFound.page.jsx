import { Link } from "react-router-dom";

const headingPrimary = { fontSize: "3rem", color: "var(--bs-teal)" };
const headingSecondary = { fontSize: "1.5rem" };

export default function NotFoundPage({ to }) {
    return (
        <div className="text-center my-5 py-5 d-flex justify-content-center align-items-center">
            <div>
                <h2 style={headingPrimary}> 404 </h2>
                <p style={headingSecondary}> Page Not Found </p>
                <Link to={to ? to : "/"} className="btn btn-primary">
                    <i className="fa fa-arrow-back m-2"></i> Go Back
                </Link>
            </div>
        </div>
    );
}
