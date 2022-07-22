import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordPage from "./Component/ForgotPasswordPage";
import ResetPasswordPage from "./Component/ResetPasswordPage";
import SignInPage from "./Component/SignInPage";
import "../Common/Style/Style.css";
function LandingLayout() {
    return (
        <div className="container">
            <div className="landing-content-container">
                <Routes>
                    <Route path="/sign-up" element={<SignInPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                    <Route
                        path="/reset-password"
                        element={<ResetPasswordPage />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default LandingLayout;
