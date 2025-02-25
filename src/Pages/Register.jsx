import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createuser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name=form.get("name");
        const email=form.get("email");
        const password=form.get("password");
        console.log(name,email,password);

        createuser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log("error edi",error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl text-center font-semibold mt-9">Register Page</h1>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
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

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center">Already have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link> now</p>
                </form>
            </div>
        </div>
    );
};

export default Register;