import React from 'react';
import { Link } from 'react-router-dom';
import { AddIncome } from '../components/addIncome/AddIncome';
import { Income } from '../components/addIncome/AddIncome';

const Incomes = () => {
  // Retrieve data from localStorage
  const ids = JSON.parse(localStorage.getItem('ids')) || [];
  const amounts = JSON.parse(localStorage.getItem('amounts')) || [];
  const descs = JSON.parse(localStorage.getItem('descs')) || [];

  // Create an object with income data
  const all = {
    incomeId: ids,
    incomeAmount: amounts,
    incomeDesc: descs,
  };

  return (
    <div>
      <button>
        <Link to="/addincome">addIncome</Link>
      </button>

      {/* Loop through each income and display its details */}
      {all.incomeId.map((id, index) => (
        <div key={id}>
          <p>Income ID: {id}</p>
          <p>Amount: {all.incomeAmount[index]}</p>
          <p>Description: {all.incomeDesc[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Incomes;
