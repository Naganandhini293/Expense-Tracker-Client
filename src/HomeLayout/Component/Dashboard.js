import React, { useState, useEffect } from "react";
import "../Style/Dashboard.css";
import BarChart from "./BarChart";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../../Common/Layout/Modal";
import * as functions from "../../Common/Functions/validateFunction";
function Dashboard() {
    let SNO = 1;
    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState();
    const [expenseNotes, setExpenseNotes] = useState("");
    const [expenseNameErrorMessage, setexpenseNameErrorMessage] =
        useState(false);
    const [expenseAmountErrorMessage, setExpenseAmountErrorMessage] =
        useState(false);
    const [editExpense, setEditExpense] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    let total = 0;
    let yesterdayExpenseData = [
        {
            expenseName: "Stationery",
            expenseAmount: 500,
        },
        {
            expenseName: "Transport",
            expenseAmount: 700,
        },
        {
            expenseName: "Food",
            expenseAmount: 250,
        },
        {
            expenseName: "Vacation",
            expenseAmount: 100,
        },
        {
            expenseName: "Outing",
            expenseAmount: 700,
        },
        {
            expenseName: "Movie",
            expenseAmount: 300,
        },
        {
            expenseName: "Food",
            expenseAmount: 250,
        },
        {
            expenseName: "Vacation",
            expenseAmount: 100,
        },
        {
            expenseName: "Outing",
            expenseAmount: 700,
        },
        {
            expenseName: "Movie",
            expenseAmount: 300,
        },
        {
            expenseName: "Food",
            expenseAmount: 250,
        },
        {
            expenseName: "Vacation",
            expenseAmount: 100,
        },
        {
            expenseName: "Outing",
            expenseAmount: 700,
        },
        {
            expenseName: "Movie",
            expenseAmount: 300,
        },
        {
            expenseName: "Food",
            expenseAmount: 250,
        },
        {
            expenseName: "Vacation",
            expenseAmount: 100,
        },
        {
            expenseName: "Outing",
            expenseAmount: 700,
        },
        {
            expenseName: "Movie",
            expenseAmount: 300,
        },
    ];
    let expenseItem = [
        {
            id: 1,
            expenseItem: "Movie",
            amount: 120,
            note: "nsfdjgnknflkagnlkafngkn",
        },
        {
            id: 2,
            expenseItem: "Vacation",
            amount: 100,
            note: "nsfdjgnknflkagnlkafngkn",
        },
        {
            id: 3,
            expenseItem: "Outing",
            amount: 250,
            note: null,
        },
        {
            id: 4,
            expenseItem: "Game",
            amount: 200,
            note: "",
        },
    ];
    useEffect(() => {
        let total = 0;
        expenseItem.map((data) => {
            total += data.amount;
        });
        setTotalAmount(total);
    });
    const expenseSubmitHandler = (e) => {
        e.preventDefault();
        if (
            !functions.validateInput(expenseName, setErrorMessage, "alphabetic")
        ) {
            return setexpenseNameErrorMessage(true);
        } else if (
            !functions.validateInput(expenseAmount, setErrorMessage, "numeric")
        ) {
            return setExpenseAmountErrorMessage(true);
        } else if (!expenseAmountErrorMessage && !expenseNameErrorMessage) {
            let data = {
                expenseItem,
                expenseAmount,
                expenseNotes,
            };
            setEditExpense(false);
            setExpenseName("");
            setExpenseAmount("");
            setExpenseNotes("");
            return console.log(data);
        }
    };
    const editExpenseHandler = (data) => {
        setEditExpense(true);
        setExpenseName(data.expenseItem);
        setExpenseAmount(data.amount);
        setExpenseNotes(data.note);
    };
    return (
        <div className="dashboard-container">
            <div className="dashboard-section">
                <div className="card-container dashboard-card-inner-conatiner">
                    <div className="describtion-add-expense-container">
                        <div className="dashboard-title">Dashboard</div>
                        <div className="add-expense-container">
                            <form
                                className="add-expense-inner-container"
                                onSubmit={expenseSubmitHandler}
                            >
                                <div className="add-expense-title">
                                    {editExpense
                                        ? "Update Expense"
                                        : "Add tody Expense Here."}
                                </div>
                                <div className="add-expense-input-ctr">
                                    <label>Expense Name</label>
                                    <input
                                        className={
                                            "primary-input-field " +
                                            (expenseNameErrorMessage &&
                                                " input-error-field ")
                                        }
                                        value={expenseName}
                                        onChange={(e) => {
                                            setexpenseNameErrorMessage(false);
                                            setErrorMessage("");
                                            setExpenseName(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div className="add-expense-input-ctr">
                                    <label>Expense Amount</label>
                                    <input
                                        className={
                                            "primary-input-field " +
                                            (expenseAmountErrorMessage &&
                                                " input-error-field")
                                        }
                                        value={expenseAmount}
                                        onChange={(e) => {
                                            setErrorMessage("");
                                            setExpenseAmountErrorMessage(false);
                                            setExpenseAmount(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div className="add-expense-input-ctr">
                                    <label>Note</label>
                                    <input
                                        className="primary-input-field"
                                        value={expenseNotes}
                                        onChange={(e) => {
                                            setExpenseNotes(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div className="input-error-message">
                                    {errorMessage}
                                </div>
                                <div>
                                    <button
                                        className="secondary-btn add-expense-btn"
                                        onClick={expenseSubmitHandler}
                                    >
                                        {editExpense ? "Update" : "Add"}
                                    </button>
                                    <button
                                        className="secondary-btn cancel-expense-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setEditExpense(false);
                                            setExpenseAmountErrorMessage(false);
                                            setexpenseNameErrorMessage(false);
                                            setErrorMessage("");
                                            setExpenseName("");
                                            setExpenseAmount("");
                                            setExpenseNotes("");
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                            <div className="total-dashboard-amount-container">
                                Today Total Expense: {totalAmount}
                            </div>
                        </div>
                    </div>
                    <div className="expense-list-conatiner">
                        <div className="expense-list-title">Expense List</div>
                        <div className="expense-item-list">
                            <div className="expense-item-inner-list">
                                {expenseItem.map((data) => {
                                    total = total + data.amount;
                                    return (
                                        <div className="expense-item">
                                            <div className="expense-sno">
                                                {SNO++}
                                            </div>
                                            <div className="expense-item-name">
                                                {data.expenseItem}
                                            </div>
                                            <div className="expense-amount">
                                                {data.amount}
                                            </div>
                                            <div
                                                className="expense-edit-btn"
                                                onClick={() => {
                                                    console.log(data);
                                                    editExpenseHandler(data);
                                                }}
                                            >
                                                <EditIcon />
                                            </div>
                                            <div
                                                className="expense-delete-btn"
                                                onClick={() => {
                                                    setIsDeleteModal(true);
                                                }}
                                            >
                                                <DeleteIcon />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isDeleteModal && (
                <Modal
                    modalTitle={"Delete Expense"}
                    modalContent={"Are you sure want to delete?"}
                    closeModal={() => {
                        setIsDeleteModal(false);
                    }}
                />
            )}
        </div>
    );
}

export default Dashboard;
