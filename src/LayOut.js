import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div className=' flex flex-col min-h-screen'>
        <Header/>
        <Outlet/>

    </div>
  )
}

export default LayOut