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
                        <FaXTwitter className="text-2xl mr-2 " />
                        Twitter
                    </button>
                    <button className="mt-2 flex p-4  border-2 w-full">
                        <FiInstagram className="text-2xl mr-2 " />
                        Instagram
                    </button>
                </div>
            </div>
            <div>
                <h1 className="text-3xl mt-10 mb-2">Q-Zone</h1>
                <div className="items-center bg-gray-100 pt-4 rounded-lg">
                    <img className="mt-6 mx-auto" src="https://i.ibb.co.com/XkzSm7Rt/81f5332d-8610-4a3e-b6dd-d9be14749010.png" alt="" />
                    <img className="mt-6 mx-auto" src="https://i.ibb.co.com/tPYPS41x/336f2b4a-389a-4b05-8974-29284954c307.png" alt="" />
                    <img className="mt-6 mx-auto" src="https://i.ibb.co.com/0df4Hg1/9f6f92ad-4cc2-4b05-8f64-8c0ff9031c25.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;