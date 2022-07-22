import React from "react";
import "./SideNavigation.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import DehazeTwoToneIcon from "@mui/icons-material/DehazeTwoTone";
import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
function SideNavigation() {
    const navigate = useNavigate();
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const menuItem = [
        {
            id: 1,
            path: "/users/dashboard",
            name: "Dashboard",
            icon: <DashboardTwoToneIcon />,
        },
        {
            id: 2,
            path: "/users/view-expense",
            name: "View",
            icon: <TableViewTwoToneIcon />,
        },
        {
            id: 3,
            path: "/users/reports",
            name: "Reports",
            icon: <AssessmentTwoToneIcon />,
        },
        {
            id: 4,
            path: "/home/sign-in",
            name: "Logout",
            icon: <ExitToAppTwoToneIcon />,
        },
    ];

    return (
        <div className="side-navigation-section">
            {/* {sideBarOpen === false ? (
                <div
                    className="side-nav-btn"
                    onClick={(e) => {
                        setSideBarOpen(true);
                    }}
                >
                    <DehazeTwoToneIcon />
                </div>
            ) : ( */}
            <div className="side-navigation-container">
                {/* <div
                    className="back-btn"
                    onClick={(e) => {
                        setSideBarOpen(false);
                    }}
                >
                    <ArrowBackIcon />
                </div> */}
                <div className="sidebar-title">Expense Tracker</div>
                <div className="side-bar-content-container">
                    {menuItem.map((menu) => {
                        return (
                            <li
                                className="side-bar-list"
                                key={menu.id}
                                onClick={() => {
                                    navigate(menu.path);
                                }}
                            >
                                {menu.icon}
                                {menu.name}
                            </li>
                        );
                    })}
                </div>
            </div>
            {/* )} */}
        </div>
    );
}

export default SideNavigation;
