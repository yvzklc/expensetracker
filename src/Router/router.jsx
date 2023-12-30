import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {MainLayout} from '../layouts/main/MainLayout'
import Incomes from '../pages/Incomes'
import Expenses from '../pages/Expenses'
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
    },]
}
])
