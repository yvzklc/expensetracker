import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDollarSign, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "../style/income.css";
import "../style/btn.css";

const Incomes = () => {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const storedData = localStorage.getItem("incomes");
    
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Veriyi bir diziye çevirme
      const dataArray = Object.values(parsedData);

      setDataList(dataArray);
     
    }
  
  }, []);
  const deleteTask = async (id) => {
    const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const newIncomes = incomes.filter((data) => data.id !== id);
    localStorage.setItem("incomes", JSON.stringify(newIncomes));
    window.location.reload();
  };
  const navigateAdd = () => {
    navigate("/dashboard/addincome")
  }
  const sum = () => {
   
      let total = dataList.reduce((acc,inc) =>  acc + inc.amount ,0 )
      localStorage.setItem("totalIncome",total)
   
  }
  sum()
  return (
    <div className="Main">
      
<button type="button" className="addbutton" onClick={() => navigateAdd()} >
  
  <span className="addbutton__text">Add Income</span>
  <span className="addbutton__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
<br />
      {dataList.length > 0 ? (
        <div>
          <h2>Incomes</h2>
          <ul>
            {dataList.map((data) => (
              <div className="incomeDiv" key={data.id}>
                <h1>{data.title}</h1>
                <div className="parameters">
                  <p>
                    <FaCalendarAlt />
                    {data.date}
                  </p>
                  <p>
                    <FaDollarSign />
                    {data.amount}
                  </p>
                  <p>
                    <MdMessage />
                    {data.desc}
                  </p>
                </div>

                <button
                  className="noselect delete"
                  onClick={() => deleteTask(data.id)}
                >
                  <span className="text">Delete</span>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                    </svg>
                  </span>
                </button>
              
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className="noData">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Incomes;
