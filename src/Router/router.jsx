import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {MainLayout} from '../layouts/main/MainLayout'
import Incomes from '../pages/Incomes'
import Expenses from '../pages/Expenses'
import {AddIncome} from '../components/addIncome/AddIncome'
import { AddExpense } from '../components/addexpense/AddExpense'
import HomePage from '../pages/HomePage'
export const router = createBrowserRouter([{
    path:"/",
    element: <MainLayout/>,
    children:[
        {
            index: true,
            element: <HomePage />,
          },
        {
        path:"/incomes",
        element: <Incomes/>
    },
    {
        path:"/expenses",
        element: <Expenses/>
    },
    {
        path:"/addincome",
        element: <AddIncome/>
    },
    {
        path:"/addexpense",
        element: <AddExpense/>
    },]
}
])
