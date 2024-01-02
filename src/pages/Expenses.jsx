import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaCalendarAlt ,FaTrash  } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "../style/expense.css"
const Expenses = () => {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
  
    const storedData = localStorage.getItem('expenses');


    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Veriyi bir diziye çevirme
      const dataArray = Object.values(parsedData);

      setDataList(dataArray);
    }
  }, []); 
  const deleteTask = (id) => {
  const expenses = JSON.parse(localStorage.getItem("expenses"))
  const newExpenses = expenses.filter(expense => expense.id !== id)
  localStorage.setItem("expenses",JSON.stringify(newExpenses))
  window.location.reload()
  }
  return (
    <div>
      <button><Link to="/addexpense">addExpense</Link></button>
      {dataList.length > 0 ? (
        <div>
          <h2>expenses</h2>
    
          <ul>
            {dataList.map((data) => (
         
              <div className='expenseDiv' key={data.id}>
                <h1>{data.title}</h1>
                <div className="parameters">
                <p><FaCalendarAlt />{data.date}</p>
                <p><FaDollarSign />{data.amount}</p>
                <p><MdMessage />{data.desc}</p>
             
                </div>
                <FaTrash className='delete' onClick={() => deleteTask(data.id)}/>
            </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>No data found </p>
      )}
    </div>
  );
};

export default Expenses;
