import { Route, Routes} from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Project/Home';




function RouteApp(){
    return(
     
        <Routes>

         
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Home/>}/>
         
           </Routes>
       

    )
}

export default RouteApp;