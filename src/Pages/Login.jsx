import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log("error edi", error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl text-center font-semibold mt-9">Login Page</h1>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center">Do not have an account <Link to="/register" className="text-blue-600 font-bold">Register</Link> now</p>
                </form>
            </div>
        </div>
    );
};

export default Login;