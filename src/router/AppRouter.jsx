import React from 'react'
import { Router,Route,Routes } from 'react-router-dom'
import {MainLayout} from '../layouts/main/MainLayout'
import Incomes from '../pages/Incomes'
import Expenses from '../pages/Expenses'
import {AddIncome} from '../components/addIncome/AddIncome'
import { AddExpense } from '../components/addexpense/AddExpense'
import HomePage from '../pages/HomePage'
import PrivateRouter from "./PrivateRouter";
import Login from '../pages/Login'
export const AppRouter = () => {
    return (
      <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRouter />}>
            <Route path="" element={<HomePage />} />
              <Route path="incomes" element={<Incomes />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="addincome" element={<AddIncome />} />
              <Route path="addexpense" element={<AddExpense />} />
            </Route>
          </Routes>
          </>
      );
}