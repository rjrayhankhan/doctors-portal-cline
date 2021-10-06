import React, { useContext } from "react";
import { UserContext } from "../../../App";
import img from '../../../images/Group 140.png';
import { useForm } from "react-hook-form";
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "../../../firebase.config";


initializeApp(firebaseConfig);

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleClick = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { displayName, email} = result.user;
                const signInUser = { name: displayName, email}
                setLoggedInUser(signInUser);
                sessionStorage.setItem('token', token)
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    return (
        <section className="container">
            <div className="row">
                <div className="loginForm shadow-sm my-auto col-md-5">
                    <h3 className="my-4 text-center text-secondary">Login</h3>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="from-group mt-5">
                            <input className="input-aria p-2" placeholder="user name or email" type="email/text" {...register("name", { required: true })} /> <br />
                            {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                        </div>

                        <div className="from-group my-4">
                            <input className="input-aria p-2" placeholder="password" type="password" {...register("password", { required: true })} /> <br />
                            {errors.password && <span style={{ color: "red" }}>This field is required</span>}
                        </div>
                        <Link to="#" className="text-danger">Forget Your Password</Link>
                        <div className="from-group mt-4">
                            <input className="button py-2 px-5" type="submit" />
                        </div>
                    </form>
                            <br />
                            <button onClick={handleClick} className="button py-2 px-5 mt-5" >GoogleSingIn</button>
                </div>
                <div className="col-md-7 d-flex justify-content-end mt-5 pt-2">
                    <img width="500px" className="d-flex justify-content-end mr-0" src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;