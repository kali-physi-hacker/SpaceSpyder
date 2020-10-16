import React, {useContext, useState} from 'react';
import axios from 'axios';

import {nonEmpty} from '../helpers/utils';
import {AppContext} from "../App";


const SignInView = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const app_context = useContext(AppContext);

    const login = e => {
        app_context.dispatchState({type: "SET_LOADING", is_loading: true})
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        if (nonEmpty(user)) {
            axios.post('/api/auth/login', user)
                .then(response=> {
                    console.log(response);
                    setErrorMessage("")
                    app_context.dispatchState({type: "SET_LOADING", is_loading: false})
                })
                .catch(exception=> {
                    console.log(exception.response.data)
                    setErrorMessage(exception.response.data.email || exception.response.data.password || "Nothing")
                    app_context.dispatchState({type: "SET_LOADING", is_loading: false})
                })
        } else {
            console.log("Not Valid:", user)
        }
        app_context.dispatchState({type: "SET_LOADING", is_loading: false})
    }

    return (
        <div className={`cs-view ${props.showSignin ? "show" : ""}`} id="modal-signin-view">
            <div className="modal-header border-0 bg-dark px-4">
                <h4 className="modal-title text-light">Sign in</h4>
                <button className="close text-light" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body px-4">
                <p className="font-size-ms text-muted">Sign in to your account using email and password
                    provided during registration.</p>
                <form onSubmit={login} className="needs-validation" noValidate>
                    <p className="text-center"><small className={"text-danger"}>{errorMessage}</small></p>
                    <div className="input-group-overlay form-group">
                        <div className="input-group-prepend-overlay"><span className="input-group-text"><i
                            className="fe-mail"></i></span></div>
                        <input onChange={(e)=> setEmail(e.target.value)} className="form-control prepended-form-control" type="email"
                               placeholder="Email" required />
                    </div>
                    <div className="input-group-overlay cs-password-toggle form-group">
                        <div className="input-group-prepend-overlay"><span className="input-group-text"><i
                            className="fe-lock"></i></span>
                        </div>
                        <input onChange={(e)=> setPassword(e.target.value)} className="form-control prepended-form-control" type={ showPassword ? 'text' : 'password'}
                               placeholder="Password" required />
                            <label className="cs-password-toggle-btn">
                                <input className="custom-control-input" type="checkbox" />
                                <i onClick={()=> setShowPassword(!showPassword)} className="fe-eye cs-password-toggle-indicator">
                                    <span
                                    className="sr-only">Show password</span>
                                </i>
                            </label>
                        <div className="invalid-tooltip">Please choose a username.</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center form-group">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="keep-signed" />
                                <label className="custom-control-label" htmlFor="keep-signed">Keep me signed
                                    in</label>
                        </div>
                        <a className="nav-link-style font-size-ms" href="password-recovery.html">Forgot
                            password?</a>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                    <p className="font-size-sm pt-3 mb-0">Don't have an account?
                        <a onClick={()=> props.openSignup()} href='#' className='font-weight-medium' data-view='#modal-signup-view'>Sign
                        up</a></p>
                </form>
            </div>
        </div>
    )
}


const SignUpView = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [passwordError, setPasswordError] = useState("");

    const signup = () => {
        const user = {
            firstName: firstName, lastName: lastName,
            email: email, password: password,
            passwordConfirm: passwordConfirm
        }
        if (nonEmpty(user)) {
            if (password === passwordConfirm) {
                axios.post('/api/auth/register', user)
                    .then(response=> {
                        console.log(response);
                    })
                    .catch(exception=> {
                        console.log(exception)
                    })
            }else {
                setPasswordError("Passwords does not match")
            }
        } else {
            console.log("Empty fields")
        }
    }

    return (
        <div className={`cs-view ${props.showSignup ? "show" : ""}`} id="modal-signup-view">
            <div className="modal-header border-0 bg-dark px-4">
                <h4 className="modal-title text-light">Sign up</h4>
                <button className="close text-light" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body px-4">
                <p className="font-size-ms text-muted">Registration takes less than a minute but gives you
                    full control over your orders.</p>
                <form onSubmit={signup} className="needs-validation" noValidate>
                    <p className="text-center"><small>{passwordError}</small></p>
                    <div className="form-group">
                        <input onChange={(e)=> setFirstName(e.target.value)} value={firstName} className="form-control" type="text" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                        <input onChange={(e)=> setLastName(e.target.value)} value={lastName} className="form-control" type="text" placeholder="Last name" required />
                    </div>
                    <div className="form-group">
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className="form-control" type="text" placeholder="Email" required />
                    </div>
                    <div className="cs-password-toggle form-group">
                        <input onChange={(e)=> setPassword(e.target.value)} value={password} className="form-control" type="password" placeholder="Password" required />
                            <label className="cs-password-toggle-btn">
                                <input className="custom-control-input" type="checkbox" />
                                    <i className="fe-eye cs-password-toggle-indicator"></i>
                                    <span className="sr-only">Show password</span>
                            </label>
                    </div>
                    <div className="cs-password-toggle form-group">
                        <input onChange={(e)=> setPasswordConfirm(e.target.value)} value={passwordConfirm} className="form-control" type="password" placeholder="Confirm password"
                               required />
                            <label className="cs-password-toggle-btn">
                                <input className="custom-control-input" type="checkbox" />
                                    <i className="fe-eye cs-password-toggle-indicator"></i>
                                <span className="sr-only">Show password</span>
                            </label>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Sign up</button>
                    <p className="font-size-sm pt-3 mb-0">Already have an account?
                        <a onClick={()=> props.openSignin()} href='#' className='font-weight-medium' data-view='#modal-signin-view'>Sign
                        in</a></p>
                </form>
            </div>
        </div>
    )
}


const ModalLogin = () => {

    const [showSignin, setShowSignin] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    const openSignin = () => {
        setShowSignin(true);
        setShowSignup(false);
    }

    const openSignup = () => {
        setShowSignup(true);
        setShowSignin(false);
    }

    return (
        <div className={`modal fade ${showSignin || showSignup ? "show" : ""}`} id="modal-signin" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content border-0">
                    <SignInView openSignup={openSignup} showSignin={showSignin} />
                    <SignUpView openSignin={openSignin} showSignup={showSignup} />

                    <div className="modal-body text-center px-4 pt-2 pb-4">
                        <hr />
                            <p className="font-size-sm font-weight-medium text-heading pt-4">Or sign in with</p>
                            <a className="social-btn sb-facebook sb-lg mx-1 mb-2" href="#"><i className="fe-facebook"></i></a>
                            <a className="social-btn sb-twitter sb-lg mx-1 mb-2" href="#"><i className="fe-twitter"></i></a>
                            <a className="social-btn sb-instagram sb-lg mx-1 mb-2" href="#"><i className="fe-instagram"></i></a>
                            <a className="social-btn sb-google sb-lg mx-1 mb-2" href="#"><i className="fe-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalLogin;