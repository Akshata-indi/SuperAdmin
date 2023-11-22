import React from 'react'
import IconBar from '../../components/iconbar/Iconbar'
import Sidebar from '../navigation/Sidebar'
// import Header from '../../components/Header/Header'

const Layout = () => {
  return (
    <div>
        <div className="flex h-screen">
      {/* 1st Pane: Icon Bar */}
      <div className="w-16 bg-white">
        <IconBar/>
      </div>

      {/* 2nd Pane: Sidebar */}
      <div className="w-64 bg-gray-200">
        Work Space
        <Sidebar />
      </div>

      {/* 3rd Pane: Body */}
      <div className="flex-1 p-4 bg-white">
      </div>
    </div>
    </div>
  )
}

export default Layout