import React from "react";
import {
    BrowserRouter,
    Routes,
    useParams,
    Route,
    Navigate,
} from "react-router-dom";
import HomeLayout from "./HomeLayout/HomeLayout";
import LandingLayout from "./LandingLayout/LandingLayout";
function RouterSettings() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/home/sign-in" />}
                />
                <Route path="/home/*" element={<LandingLayout />} />
                <Route path="/users/*" element={<HomeLayout />} />
                <Route path="/:PageName" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
function PageNotFound() {
    const params = useParams();
    return <h3>{params.PageName} Page not found</h3>;
}
export default RouterSettings;
