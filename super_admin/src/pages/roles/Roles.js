import React from 'react'
import BodyContent from '../../configurations/bodyContent/BodyContent'
import RoleComponent from './RoleComponent'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Role from '../../components/RoleForms/Body/Role'

const Roles = () => {
  return (
    <div>
       <BodyContent content={Role}/>
    </div>
  )
}

export default Roles