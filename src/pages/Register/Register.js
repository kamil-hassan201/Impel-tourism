import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { signinUsingGithub, signinUsingGoogle, error, setIsLoading, auth, setUserName, isLoading, user, setUser, setError, signupUsingEmail } = useAuth();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signinUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const handleGithubSignIn = () => {
        signinUsingGithub()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePassWordChange = (e) => setPassword(e.target.value);
    const handleRePasswordChange = (e) => setRePassword(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);



    const handleEmailSignUp = () => {
        if (password === rePassword) {
            signupUsingEmail(email, password)
                .then(result => {
                    setUserName(name);
                    setUser(result.user);
                    setError("");
                    window.location.reload();
                    history.push(redirect_url);
                })
                .catch(err => {
                    setError(err.message);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
        else {
            setError("Password Didn't Match")
        }
        console.log(user);

    }
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className=" container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                    <div className="bg-white border px-6 py-6 rounded shadow-md text-black w-full">
                        <h1 className="mb-4 text-3xl text-center">Welcome</h1>
                        <h3 className="text-center text-xl mb-4">Join <span className="text-indigo-500">Impel Health Care</span></h3>
                        <div className="text-center md:space-x-12 space-y-3">
                            <button onClick={handleGithubSignIn} className="border rounded-md border-gray-400 px-4 py-2 mb-2"> <i class="fab fa-github"></i> Sign up with Github</button>
                            <button onClick={handleGoogleSignIn} className="border rounded-md border-gray-400 px-4 py-2 mb-2"> <i class="fab fa-google"></i> Sign up with Google</button>
                        </div>
                        <p className="text-center mb-6 mt-2 text-gray-600"><small>_____ Or use your email ____</small></p>
                        <p className="text-center mb-6 mt-2 text-red-600"><small>{error}</small></p>
                        <input
                            onBlur={handleNameChange}
                            required
                            type="text"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />
                        <input
                            onBlur={handleEmailChange}
                            required
                            type="text"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            onBlur={handlePassWordChange}
                            required
                            type="password"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            onBlur={handleRePasswordChange}
                            required
                            type="password"
                            className="block border border-gray-400 w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            onClick={handleEmailSignUp}
                            type="submit"
                            className="w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" to="#">
                                Terms of Service
                            </Link> and
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" to="#">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?<Link className="no-underline border-b border-blue text-blue" to="/signin"> Log in</Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;