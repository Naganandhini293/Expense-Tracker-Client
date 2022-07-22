import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Header from "../Common/Layout/Header";
import SideNavigation from "../Common/Layout/SideNavigation";
import ViewExpense from "./Component/ViewExpense";
import Profile from "./Component/Profile";
function HomeLayout() {
    return (
        <div className="container">
            <div className="content-container">
                <SideNavigation />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/view-expense" element={<ViewExpense />} />
                    <Route paht="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}

export default HomeLayout;
