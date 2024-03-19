import './index.css';
import '../../Imgens/images.png';



import Dashboard from '../Dash';
import Profilemenu from '../Profile';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function Home (){

  /* responsive menu */
  const [opneSidebarToggle, setOpenSoidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSoidebarToggle(!opneSidebarToggle)
  }


        return (
    
           <div className="container">
               <Sidebar opneSidebarToggle={opneSidebarToggle} OpenSidebar={OpenSidebar}/>
              <Dashboard/>
             <Profilemenu OpenSidebar={OpenSidebar}/>
           </div>
             
             
           
           );
          }
         
   

export default Home ;