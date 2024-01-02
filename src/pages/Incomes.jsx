import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaCalendarAlt ,FaTrash  } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "../style/income.css"
import "../style/btn.css"

const Incomes = () => {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
  
    const storedData = localStorage.getItem('incomes');


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
   

  return (
    <div>
      <button class="btn-23">
  <span class="text">addIncome</span>
  <span aria-hidden="" class="marquee"><Link to="/addincome">addIncome</Link></span>
</button>

      {dataList.length > 0 ? (
        <div>
          <h2>Incomes</h2>
          <ul>
            {dataList.map((data) => (
         
              <div className='incomeDiv' key={data.id}>
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
        <div className="noData">
        <p >No data found</p>
        </div>
      )}
    </div>
  );
};

export default Incomes;
