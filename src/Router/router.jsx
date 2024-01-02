import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {MainLayout} from '../layouts/main/MainLayout'
import Incomes from '../pages/Incomes'
import Expenses from '../pages/Expenses'
import {AddIncome} from '../components/addIncome/AddIncome'
import { AddExpense } from '../components/addexpense/AddExpense'
export const router = createBrowserRouter([{
    path:"/",
    element: <MainLayout/>,
    children:[{
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
