import React, { useEffect, useState } from "react";
import "../../style/addincome.css"
import { useNavigate } from "react-router-dom";
export let Income = {}
export const AddIncome = () => {
   const [income, setIncome] = useState([]);
   const [desc,setDesc] = useState([]);
   const [title,setTitle] = useState([]);
   const [date,setDate] = useState([]);
   console.log("date",date)
   const navigate = useNavigate()
   const id = crypto.randomUUID();
   const amount = Number(income.slice(-1).toString()); 
  async function addincome (data){
   
      const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
      incomes.push(data);
      localStorage.setItem("incomes", JSON.stringify(incomes));
      navigate("/dashboard/incomes")

} 

  
  return (
    <div>
      <form>
        <input
          type="number"
         
          onInput={(e) => setIncome([...income, e.target.value])}
          placeholder="enter income"
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
        <input type="button" value="send" onClick={() => addincome({id,amount,desc,date,title})} />
     
      </form>
    </div>
  );
};
