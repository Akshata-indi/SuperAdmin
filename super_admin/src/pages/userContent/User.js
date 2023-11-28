import BodyContent from '../../configurations/bodyContent/BodyContent'
import UserComponent from './UserComponent'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const User = () => {
  
  return (
    <div>
      
      
     <BodyContent content={UserComponent || <Skeleton/>} /> 
    
    </div>
  );
}

export default User