import React, { useEffect, useState } from "react";
import "../../style/addexpense.css"
import { Link, useNavigate } from "react-router-dom";
export let Expense = {}
export const AddExpense = () => {
   const [expense, setExpense] = useState([]);
   const [desc,setDesc] = useState([]);
   const [title,setTitle] = useState([]);
   const [date,setDate] = useState([]);
   console.log("date",date)
   const navigate = useNavigate()
   const id = crypto.randomUUID();
   const amount = Number(expense.slice(-1).toString()); 
   

   async function addExpense(data){
   
     const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
     expenses.push(data);
     localStorage.setItem("expenses", JSON.stringify(expenses));
     navigate("/dashboard/expenses")

} 

  
  return (
    <div>
      <form>
        <input
          type="number"
         
          onInput={(e) => setExpense([...expense,-e.target.value])}
          placeholder="enter expense"
        />
        <input type="text" placeholder="title"
        onInput={(e) => setTitle(e.target.value)}
        />
        <input type="text" placeholder="description"
        onInput={(e) => setDesc(e.target.value)}
        />
        <input type="date" placeholder="date"
        onInput={(e) => setDate(e.target.value)}
        />
        <input type="button" value="send" onClick={() => addExpense({id,amount,desc,date,title})} />
     
      </form>
    </div>
  );
};
