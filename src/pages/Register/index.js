import { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { auth} from '../../firebaseConnection'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";


function Register() {


  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  //navegar dasboard
  const navigate = useNavigate();



  async function handleRegister(e){
    e.preventDefault();


    if(email !== '' && senha !== ''){
     
      await createUserWithEmailAndPassword(auth,email,senha)
      .then(()=>{
      navigate('/dashboard', {replace:true})
      })
      .catch(()=>{
        console.log("Erro ao fazer cadastro")
      })

 
    }else{
      alert("Preencha todos os campos!");
    }
    
  }

  



    return (
      <div className="home-cont"> 
      <h1>ION.<span >vendas</span></h1>
        <p> Faça seu cadastro </p>

        <form className="formu" onSubmit={handleRegister}>
          <input type="text" placeholder="Digite seu email..." 
          value={email}  onChange={(e)=> setEmail(e.target.value )}/>

          <input type="password" placeholder="**********" 
          value={senha}  onChange={(e)=> setSenha(e.target.value )}/>

          <button type="submit"> Registrar </button>

        </form>
        <Link to="/" className="foot"> Já possui uma conta ? Faça o login! </Link>
     



      </div>
    );
  } 
  
  export default Register;