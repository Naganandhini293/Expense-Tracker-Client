import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const BarChart = (expenseData) => {
    console.log("+++++++++++++++++++++++++");
    const [tempExpenseData, setExpenseData] = useState(expenseData);
    const [expenseLabel, setExpenseLabel] = useState([]);
    const [expenseAmount, setExpenseAmount] = useState([]);
    useEffect(() => {
        console.log("==================================");
        let tempExpenseLabel = [];
        let tempExpenseAmount = [];
        tempExpenseData.expenseData.map((data) => {
            tempExpenseLabel.push(data.expenseName);
            tempExpenseAmount.push(data.expenseAmount);
            setExpenseLabel(tempExpenseLabel);
            setExpenseAmount(tempExpenseAmount);
        });
    }, [tempExpenseData]);

    return (
        <div className="bar-graph-conatiner">
            <Bar
                data={{
                    labels: expenseLabel,
                    datasets: [
                        {
                            label: "expense amount",
                            data: expenseAmount,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                        },
                        // {
                        //     label: "Quantity",
                        //     data: [47, 52, 67, 58, 9, 50],
                        //     backgroundColor: "orange",
                        //     borderColor: "red",
                        // },
                    ],
                }}
                height={200}
                width={300}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;
