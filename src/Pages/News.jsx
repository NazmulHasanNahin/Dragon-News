import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import RightSideNav from "./Shared/RightSideNav";
import Navbar from "./Shared/Navbar";

const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-[#403f3f] text-xl font-semibold leading-[30px]">Dragon News</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <h1>news</h1>
        </div>
    );
};

export default News;