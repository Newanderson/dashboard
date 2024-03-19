 import'../Home/index.css';
 

//icons
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { GrUnorderedList } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';
 
function Sidebar ({opneSidebarToggle , OpenSidebar}){

  
   return(

<div>
    <aside id='aside' className={opneSidebarToggle ? "aside-response" : ""}>
        <div className="top1">
            <div className='logo'> 
          
              <h2>ION.<span></span></h2>
              <div className='close'><IoCloseCircleSharp onClick={OpenSidebar}/></div>
        </div>
  
       
        </div>
  
        <div className='sidebar'>
          <div>
                <span><FaHouse  /></span>
                  <h3>Inicio</h3>  </div>
                  
              
              <div className='active'>
                  <span><IoPersonSharp /></span>
                  <h3>Perfil</h3>  
              </div>
              <div>
                  
                  <span><GrUnorderedList /></span>
                  <h3>Pedidos</h3>  
                  
              </div>
              <div>
                  <span><SiGoogleanalytics /></span>
                  <h3>Atividades</h3>  
              </div>
              <div>
                  <spna><FaSearch /></spna>
                  <h3>Consultas</h3>  
              </div>
             
              <div>
                  <pan><IoSettingsSharp /></pan>
                  <h3>Configurações</h3>  
              </div>
              <div>
                  <span><IoAddCircle /></span>
                  <h3>Add Pedido</h3>  
              </div>
              <Link to="/">
              <div className='exit'>
               
                  <span  > <IoLogOut /></span>
                  <h3 >Sair</h3> 
              </div>
              </Link>
        </div>
  
    </aside>
    </div>   
   )
   
 }


 export default Sidebar;