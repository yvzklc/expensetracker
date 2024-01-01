import React, { useEffect, useState } from "react";
export let Income = {}
export const AddIncome = () => {
   const [income, setIncome] = useState([]);
   const [desc,setDesc] = useState([]);
   const [date,setDate] = useState([]);
   console.log("date",date)
  
   const id = crypto.randomUUID();
   const amount = income.slice(-1).toString(); 
  async function addincome (id,amount,desc){
    
    const ids = JSON.parse(localStorage.getItem("ids")) || [];
    ids.push(id);
    console.log(ids)
    localStorage.setItem("ids", JSON.stringify(ids));
    const descs = JSON.parse(localStorage.getItem("descs")) || [];
    descs.push(desc);
    console.log(descs)
    localStorage.setItem("descs", JSON.stringify(descs));
    const amounts = JSON.parse(localStorage.getItem("amounts")) || [];
    amounts.push(amount);
    console.log(amounts)
    localStorage.setItem("amounts", JSON.stringify(amounts));
   
    const dates = JSON.parse(localStorage.getItem("dates")) || [];
    dates.push(date);
    console.log(dates)
    localStorage.setItem("dates", JSON.stringify(dates));
   
} 

  
  return (
    <div>
      <form>
        <input
          type="number"
         
          onInput={(e) => setIncome([...income, e.target.value])}
          placeholder="enter income"
        />
        <input type="text" placeholder="description"
        onInput={(e) => setDesc(e.target.value)}
        />
        <input type="date" placeholder="date"
        onInput={(e) => setDate(e.target.value)}
        />
        <input type="button" value="send" onClick={() => addincome(id,amount,desc)} />
     
      </form>
    </div>
  );
};
