import Header from "./Header/Header";
// import Sidebar from "./Sidebar/Sidebar";
import "./Home.css";

const MainAppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">
                {children}
                {/* <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        {children}
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default MainAppLayout;
