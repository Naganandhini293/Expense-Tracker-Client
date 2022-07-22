import React, { useState } from "react";
import "../Style/SignInPage.css";
import { useNavigate } from "react-router-dom";
import PieChart from "../../assets/image/login/GraphPie.png";
import { Checkbox } from "@mui/material";
import * as functions from "../../Common/Functions/validateFunction";
import { db } from "../../firbase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
function SignInPage() {
    const [view, setView] = useState(
        window.location.pathname === "/home/sign-in" ? 1 : 2
    );
    const [showPassword, setShowPassword] = useState(false);
    const [logiEmailErrorMessage, setLoginEmailErrorMessage] = useState("");
    const [loginPasswordErrorMessage, setLoginPasswordErrorMessage] =
        useState("");
    const [registerFirstNameError, setRegisterFirstNameError] = useState("");
    const [registerLastNameError, setRegisterLastNameError] = useState("");
    const [registerEmailError, setRegisterEmailError] = useState("");
    const [registerPasswordError, setRegisterPasswordError] = useState("");
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });
    const [registerUser, setRegisterUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const RegisterInputHandler = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...registerUser,
            [name]: value,
        };
        setRegisterUser(updatedForm);
    };
    const RegisterUserFormHandler = async (e) => {
        e.preventDefault();
        let registerValidFirstName = functions.validateInput(
            registerUser.firstName,
            setRegisterFirstNameError,
            "alphabetic"
        );
        let registerValidLastName = functions.validateInput(
            registerUser.lastName,
            setRegisterLastNameError,
            "alphabetic"
        );
        let registerValidEmail = functions.validateInput(
            registerUser.email,
            setRegisterEmailError,
            "email"
        );
        let registerValidPassword = functions.validateInput(
            registerUser.password,
            setRegisterPasswordError
        );
        // let registerValidConfirmPassword = functions.validateInput(
        //     registerUser.confirmPassword,
        //     setRegisterPasswordError
        // );
        if (registerUser.password !== registerUser.confirmPassword) {
            return setRegisterPasswordError("Password didn't match");
        }
        if (
            registerValidFirstName &&
            registerValidLastName &&
            registerValidEmail &&
            registerValidPassword
        ) {
            // await addDoc(collection(db, "users"), {
            //     firstName: registerUser.firstName,
            //     lastName: registerUser.lastName,
            //     email: registerUser.email,
            //     password: registerUser.password,
            //     createdAt: Timestamp.now(),
            // });
            // await db.collection("users").add({
            //     firstName: registerUser.firstName,
            //     lastName: registerUser.lastName,
            //     email: registerUser.email,
            //     password: registerUser.password,
            //     createdAt: Timestamp.now(),
            // });
            let data = {
                name: registerUser.firstName,
                email: registerUser.email,
                password: registerUser.confirmPassword,
            };

            let headers = {
                "Content-Type": "application/json",
            };
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(
                    (result) => {
                        console.log("------------", result);
                    },
                    (error) => {
                        let resultObject = {
                            fetchStatus: "failure",
                            data: error,
                        };
                        console.log("=-------------", error);
                    }
                );
            setRegisterUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setView(1);
            navigate("/home/sign-in");
        }
    };
    const LoginInputHandler = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...loginUser,
            [name]: value,
        };
        setLoginUser(updatedForm);
    };
    const LoginUserFormHandler = (e) => {
        e.preventDefault();
        console.log(loginUser);

        let loginValidEmail = functions.validateInput(
            loginUser.email,
            setLoginEmailErrorMessage,
            "email"
        );
        let loginVaildPassword = functions.validateInput(
            loginUser.password,
            setLoginPasswordErrorMessage
        );
        if (loginValidEmail && loginVaildPassword) {
            localStorage.setItem("userEmail", loginUser.email);
            localStorage.setItem("password", loginUser.password);

            setLoginUser({
                email: "",
                password: "",
            });
            navigate("/users/dashboard");
        }
    };
    const navigate = useNavigate();
    return (
        <div className="sign-in-page-container">
            <div className="sign-in-content-conatiner">
                <div className="sign-in-image-ctr">
                    <div className="sign-in-page-title">
                        Welcome to Expense Tracker!
                    </div>
                    <img src={PieChart} alt="Pie Chart" />
                </div>
                {view !== 1 ? (
                    <div className="sign-in-section">
                        <form className="sign-in-detail-section">
                            <div
                                className="login-title"
                                onSubmit={RegisterUserFormHandler}
                            >
                                Register
                            </div>
                            <div className="login-email-ctr">
                                <label>First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    autoFocus
                                    value={registerUser.firstName}
                                    className="primary-input-field"
                                    onChange={(e) => {
                                        setRegisterFirstNameError("");
                                        RegisterInputHandler(e);
                                    }}
                                ></input>
                                <div className="input-error-message">
                                    {registerFirstNameError}
                                </div>
                            </div>
                            <div className="login-email-ctr">
                                <label>Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    className="primary-input-field"
                                    onChange={(e) => {
                                        setRegisterLastNameError("");
                                        RegisterInputHandler(e);
                                    }}
                                ></input>
                                <div className="input-error-message">
                                    {registerLastNameError}
                                </div>
                            </div>
                            <div className="login-email-ctr">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={registerUser.email}
                                    className="primary-input-field"
                                    onChange={(e) => {
                                        setRegisterEmailError("");
                                        RegisterInputHandler(e);
                                    }}
                                ></input>
                                <div className="input-error-message">
                                    {registerEmailError}
                                </div>
                            </div>
                            <div className="login-password-ctr">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    value={registerUser.password}
                                    className="primary-input-field"
                                    onChange={(e) => {
                                        setRegisterPasswordError("");
                                        RegisterInputHandler(e);
                                    }}
                                ></input>
                            </div>
                            <div className="login-password-ctr">
                                <label>Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    value={registerUser.confirmPassword}
                                    className="primary-input-field"
                                    onChange={(e) => {
                                        setRegisterPasswordError("");
                                        RegisterInputHandler(e);
                                    }}
                                ></input>
                                <div className="input-error-message">
                                    {registerPasswordError}
                                </div>
                            </div>

                            <div className="sign-in-btn-ctr">
                                <button
                                    className="primary-btn"
                                    onClick={RegisterUserFormHandler}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className="login-sign-up-ctr">
                                <span>Already have a account?</span>
                                <div
                                    onClick={() => {
                                        setView(1);
                                        navigate("/home/sign-in");
                                    }}
                                    className="login-sign-up-link"
                                >
                                    Sign In
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="sign-in-section">
                        <form
                            className="sign-in-detail-section"
                            onSubmit={LoginUserFormHandler}
                        >
                            <div className="login-title">Login</div>
                            <div className="login-email-ctr">
                                <label>Email</label>
                                <input
                                    type="email"
                                    autoFocus
                                    name="email"
                                    className="primary-input-field"
                                    value={loginUser.email}
                                    onChange={(e) => {
                                        setLoginEmailErrorMessage("");
                                        LoginInputHandler(e);
                                    }}
                                ></input>
                                <div className="input-error-message">
                                    {logiEmailErrorMessage}
                                </div>
                            </div>
                            <div className="login-password-ctr">
                                <label>Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="primary-input-field"
                                    value={loginUser.password}
                                    onChange={(e) => {
                                        setLoginPasswordErrorMessage("");
                                        LoginInputHandler(e);
                                    }}
                                ></input>
                                <div className="input-error-message">
                                    {loginPasswordErrorMessage}
                                </div>
                            </div>
                            <div className="login-show-forgot-ctr">
                                <div className="login-show-password-ctr">
                                    <Checkbox
                                        onChange={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    />
                                    <div>Show Password</div>
                                </div>
                                <div>Forgot Password?</div>
                            </div>
                            <div className="sign-in-btn-ctr">
                                <button className="primary-btn">Sign In</button>
                            </div>
                            <div className="login-sign-up-ctr">
                                <span>Don't have account?</span>
                                <div
                                    onClick={() => {
                                        setView(2);
                                        navigate("/home/sign-up");
                                    }}
                                    className="login-sign-up-link"
                                >
                                    Sign Up
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignInPage;
