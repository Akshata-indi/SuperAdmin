import React from 'react'

const Header2 = () => {
  return (
    <div>
        <div className='flex items-center justify-between text-white bg-blue-600 p-4'>
            Header
            <img
          src='url_to_user_profile_picture'
          alt='User Profile'
          className='h-10 w-10 rounded-fullborder-4 border-white-500/50'
            />
        </div>
    </div>
  )
}

export default Header2