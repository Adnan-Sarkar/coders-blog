const loadingContainer = { margin: "3rem 0", transform: "translateX(50%)" };
const spinner = {
    width: "4rem",
    marginRight: "4px",
    height: "4rem",
    fontWeight: "bolder",
    color: "blueviolet",
};

export default function LoadingPage() {
    return (
        <div style={loadingContainer} className="d-flex">
            <span className="spinner-border" style={spinner} role="status"></span>
        </div>
    );
}
