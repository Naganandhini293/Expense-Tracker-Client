import React, { useEffect, useState } from "react";
import "../Style/ViewExpense.css";
import BarChart from "./BarChart";
import { useSelector, useDispatch } from "react-redux";
function ViewExpense() {
    const dispatch = useDispatch();
    const CurrentExpenseData = useSelector(
        (store) => store.viewExpense.viewCurrentExpenseData
    );
    const [ViewExpenseTitle, setViewExpenseTitle] = useState("Day Expense");
    console.log("=============", CurrentExpenseData);
    let SNO = 1;
    let totalAmount = 0;
    let yesterdayExpenseData = [
        {
            id: 1,
            expenseName: "Stationery",
            expenseAmount: 500,
        },
        {
            id: 2,
            expenseName: "Transport",
            expenseAmount: 700,
        },
        {
            id: 3,
            expenseName: "Food",
            expenseAmount: 250,
        },
        {
            id: 4,
            expenseName: "Vacation",
            expenseAmount: 100,
        },
        {
            id: 5,
            expenseName: "Outing",
            expenseAmount: 700,
        },
        {
            id: 6,
            expenseName: "Movie",
            expenseAmount: 300,
        },
        {
            id: 7,
            expenseName: "Food",
            expenseAmount: 250,
        },
        {
            id: 8,
            expenseName: "Goa",
            expenseAmount: 100,
        },
        {
            id: 9,
            expenseName: "Medical Stuff",
            expenseAmount: 700,
        },
        {
            id: 10,
            expenseName: "Bed sheet",
            expenseAmount: 300,
        },
        {
            id: 11,
            expenseName: "Washing Powder",
            expenseAmount: 250,
        },
        {
            expenseName: "Skin care",
            expenseAmount: 100,
        },
        {
            id: 12,
            expenseName: "Gift",
            expenseAmount: 700,
        },
        {
            id: 13,
            expenseName: "Books",
            expenseAmount: 300,
        },
        {
            id: 14,
            expenseName: "Note books",
            expenseAmount: 250,
        },
        {
            id: 15,
            expenseName: "Parlour",
            expenseAmount: 100,
        },
        {
            id: 16,
            expenseName: "Train ticket",
            expenseAmount: 700,
        },
        {
            id: 17,
            expenseName: "Petrol",
            expenseAmount: 300,
        },
    ];
    const [expenseData, setExpenseData] = useState(yesterdayExpenseData);
    let WeeklyExpense = [
        {
            expenseName: "sunday",
            expenseAmount: 100,
        },
        {
            expenseName: "Monday",
            expenseAmount: 200,
        },
        {
            expenseName: "Tuesday",
            expenseAmount: 300,
        },
        {
            expenseName: "Wednesday",
            expenseAmount: 400,
        },
        {
            expenseName: "Thursday",
            expenseAmount: 500,
        },
        {
            expenseName: "Friday",
            expenseAmount: 600,
        },
        {
            expenseName: "Saturday",
            expenseAmount: 700,
        },
    ];
    let MonthlyExpense = [
        {
            expenseName: "Day-1",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-2",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-3",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-4",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-5",
            expenseAmount: 23,
        },
        {
            expenseName: "Day-6",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-7",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-8",
            expenseAmount: 233,
        },
        {
            expenseName: "Day-9",
            expenseAmount: 233,
        },
    ];
    let YearlyExpense = [
        {
            expenseName: "January",
            expenseAmount: 1000,
        },
        {
            expenseName: "Febrauary",
            expenseAmount: 1500,
        },
        {
            expenseName: "March",
            expenseAmount: 2500,
        },
        {
            expenseName: "April",
            expenseAmount: 2000,
        },
        {
            expenseName: "May",
            expenseAmount: 1600,
        },
        {
            expenseName: "June",
            expenseAmount: 1700,
        },
        {
            expenseName: "July",
            expenseAmount: 1400,
        },
        {
            expenseName: "August",
            expenseAmount: 1400,
        },
        {
            expenseName: "September",
            expenseAmount: 1200,
        },
        {
            expenseName: "October",
            expenseAmount: 1000,
        },
        {
            expenseName: "November",
            expenseAmount: 1100,
        },
        {
            expenseName: "December",
            expenseAmount: 2400,
        },
    ];

    const expenseChangeHandler = (e) => {
        let expenseTypeValue = e.target.value;
        if (expenseTypeValue === "1") {
            setExpenseData(yesterdayExpenseData);
            setViewExpenseTitle("Day Expense");
        } else if (expenseTypeValue == "2") {
            setExpenseData(WeeklyExpense);
            setViewExpenseTitle("Weekly Expense");
        } else if (expenseTypeValue == "3") {
            setExpenseData(MonthlyExpense);
            setViewExpenseTitle("Monthly Expense");
        } else if (expenseTypeValue == "4") {
            setExpenseData(YearlyExpense);
            setViewExpenseTitle("Yearly Expense");
        }
    };
    return (
        <div className="view-expense-conatiner">
            <div className="view-expense-card-section">
                <div className="card-container view-expense-card-container">
                    <div className="view-expense-graph-details-container">
                        <div className="view-expense-graph-container">
                            <div className="view-expense-title">
                                View Expense
                            </div>
                            <div className="view-expense-chart-container">
                                <div className="view-expense-graph-header-container">
                                    <div className="expense-details-title">
                                        {ViewExpenseTitle}
                                    </div>
                                    <div>
                                        <input
                                            type="date"
                                            onChange={(e) => {
                                                console.log(
                                                    "---------",
                                                    e.target.value
                                                );
                                            }}
                                        ></input>
                                    </div>
                                    <div>
                                        <select
                                            onChange={(e) => {
                                                expenseChangeHandler(e);
                                            }}
                                        >
                                            <option value="1">
                                                Day Expense
                                            </option>
                                            <option value="2">
                                                Weekly Expense
                                            </option>
                                            <option value="3">
                                                Monthly Expense
                                            </option>
                                            <option value="4">
                                                Yearly Expense
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="view-chart-container">
                                    <BarChart expenseData={expenseData} />
                                </div>
                            </div>
                        </div>
                        <div className="view-expense-details-conatiner">
                            <div className="expense-details-title">
                                Expense Details
                            </div>
                            <div className="view-expense-table-conatiner">
                                <div className="expense-item">
                                    <span className="expense-sno">SNo</span>
                                    <span className="expense-item-name view-expense-item">
                                        Expense Name
                                    </span>
                                    <span className="expense-amount view-expense-amount">
                                        Expense Amount(Rs)
                                    </span>
                                </div>
                                <div className="view-expense-table-data-container">
                                    {expenseData.map((data) => {
                                        totalAmount =
                                            totalAmount + data.expenseAmount;
                                        return (
                                            <div className="expense-item">
                                                <span className="expense-sno">
                                                    {SNO++}
                                                </span>
                                                <span className="expense-item-name view-expense-item">
                                                    {data.expenseName}
                                                </span>
                                                <span className="expense-amount view-expense-amount">
                                                    {data.expenseAmount}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="total-amount-section">
                                <div className="total-amount-container">
                                    Total:{totalAmount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewExpense;
