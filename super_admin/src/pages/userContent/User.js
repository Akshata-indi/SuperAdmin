import BodyContent from '../../configurations/bodyContent/BodyContent'
import TableWithData from '../../configurations/tables/TableWithData'
import TrialComponent from './TrialComponent'
import UserComponent from './UserComponent'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const User = () => {
  
  return (
    <div>
      
      
     <BodyContent content={TableWithData} /> 
    
    </div>
  );
}

export default User