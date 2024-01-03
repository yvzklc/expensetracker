import React from 'react'
import "../style/Home.css"
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
const HomePage = () => {
  const allTotal = () => {
    const incomes = Number(localStorage.getItem("totalIncome"))
    const expenses = Number(localStorage.getItem("totalExpense"))
    total.push(incomes+expenses)
    console.log("total", incomes+expenses)
  }
  const getIncomes = () => {
    const incomes = Number(localStorage.getItem("totalIncome"))
    income.push(incomes)
  }
  const getExpenses = () => {
    const expenses = Number(localStorage.getItem("totalExpense"))
    expense.push(expenses)
  }
 const income = []
 const expense = []
 const total = []
  allTotal()
  getIncomes()
  getExpenses()
  return (
    <div>
      <div className="cards">
      <div className="total">
        <h2>TOTAL</h2>
        <p>{total}$</p>
        <AiOutlineDollarCircle className='dollarIcon'/>
      </div>
      <div className="incomes">
        <h2>INCOMES</h2>
        <p>{income}$</p>
        <AiOutlineDollarCircle className='dollarIcon'/>
        <a href="/dashboard/incomes">view all</a>
      </div>
      <div className="expenses">
        <h2>EXPENSES</h2>
        <p>{expense }$</p>
        <AiOutlineDollarCircle className='dollarIcon'/>
        <a href="/dashboard/expenses">view all</a>
      </div>
      </div>
      <div className="chartCard">
      <div className="dataCard categoryCard " style={{height: "300px"}}>
        <Doughnut
        data={{
          labels: ["income" , "expense"],
          datasets: [
            {
              label: ["data"],
              data: [income , expense],
              backgroundColor: [
                "rgba(250, 192, 19, 0.8)",
                "rgba(43, 63, 229,0.8)"
               
              ],
              borderRadius: 5,
              height: 10,
            }
          ]
        }}
        />
      </div>
      </div>
    </div>
  )
}

export default HomePage