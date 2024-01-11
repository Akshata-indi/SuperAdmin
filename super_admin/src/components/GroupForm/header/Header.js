import React from 'react'

const Header = ({ selectedGroup }) => {
  return (
    <div>
      <div className='flex items-center justify-between font-semibold mx-8 p-2 text-2xl text-gray-600'>
        {selectedGroup ? selectedGroup.label : 'No Group Selected'}
      </div>
    </div>
  )
}

export default Header