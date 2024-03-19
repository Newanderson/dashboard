import '../Home/index.css';
import Profile from '../../Imgens/profile.jpg';


//last icons
import { ImMenu } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { FaClock } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { FaTruckArrowRight } from "react-icons/fa6";


function Profilemenu ({OpenSidebar}){
    return(
        <div className='right'>
        <div className='top'>
            <button className='menu'>
            <ImMenu onClick={OpenSidebar}/>
            
            </button>
            <div  className='profile'>
                <p className='name'>Ola, <span className='souza'>New souza</span></p>
            </div>
            <div className='profile-photo'>
            <img src={Profile} alt='img profile'></img>
            </div>

     </div>
     <h2 className='title'>Contatos</h2>
        <div className='contatos'>

              
              <div className='item'>
                <div className='icons'>
                <span className='telegram'> <SiTelegram /></span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3>Telegram</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
                <h5 className="numb">+58</h5>
              </div>
              </div>
           </div>

           <div className='item'>
                <div className='icons'>
                <span className='whats'> <IoLogoWhatsapp /></span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3>Whatsapp</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
                <h5 className="numb">+120</h5>
              </div>
              </div>

              <div className='item'>
                <div className='icons'>
                <span className='email'> <MdEmail /></span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3>Email</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
                <h5 className="numb">+98</h5>
              </div>
              </div>

<div className='last'>
       

<h2 className='last-ordes'>Status dos pedidos</h2>

        <div className='Status'>

            
              <div className='item'>
                <div className='icons'>
                <span className='pending'> <FaClock /></span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3 >Pendente</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
               
              </div>
              </div>
           </div>

           <div className='item'>
                <div className='icons'>
                <span className='sent'> <FaCircleArrowRight /></span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3 >Enviado</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
                
              </div>
              </div>
              

              <div className='item'>
                <div className='icons'>
                <span className='mounted'> <FaBoxOpen /></span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3 >Montado</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
               
              </div>
              </div>

              <div className='item'>
                <div className='icons'>
                <span className='invoiced'><SiCashapp /> </span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3 >Faturado</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
               
              </div>
              </div>
              <div className='item'>
                <div className='icons'>
                <span className='truck'><FaTruckArrowRight /> </span>
                </div>
              
              <div className='texts'>
                <div className='info'>
                    <h3>Transporte</h3>
                    <small className='text-muted'>24hrs</small>
                </div>
               
              </div>
              </div>








    </div>






    </div>
    )
}

export default Profilemenu;