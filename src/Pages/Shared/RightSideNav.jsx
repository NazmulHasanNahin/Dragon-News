import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const RightSideNav = () => {
    return (
        <div className="p-4">
            <div className="">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full mt-2">
                    <FcGoogle className="text-2xl" />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full  mt-2">
                    <FaGithub className="text-2xl" />
                    Login With Github
                </button>
            </div>
            <div>
                <h1 className="text-3xl mt-10">Find Us On</h1>
                <div className="">
                    <button className="mt-2 flex p-4 border-2 w-full">
                        <FaFacebook className="text-2xl mr-2 " />
                        Facebook
                    </button>
                    <button className="mt-2 flex p-4 border-2 w-full">
                        <FaXTwitter  className="text-2xl mr-2 " />
                        Twitter
                    </button>
                    <button className="mt-2 flex p-4  border-2 w-full">
                        <FiInstagram className="text-2xl mr-2 " />
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;