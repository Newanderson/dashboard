import { useState } from "react";
import './index.css'
import { Link } from 'react-router-dom'
import {auth} from '../../firebaseConnection'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";


function Login() {


  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  //navegar pagina dashboard
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();


    if(email !== '' && senha !== ''){

      await signInWithEmailAndPassword(auth,email,senha)
      .then(()=>{
        //navegar pagina dashboard
        navigate('/dashboard', {replace:true})

      })
      .catch(()=>{
        console.log("Erro no login")
      })
      
    }else{
      alert("Preencha todos os campos!");
    }
    
  }




  



    return (
      <div className="home-cont"> 
      <h1>ION.<span >vendas</span></h1>
        <p> acessar conta </p>

        <form className="formu" onSubmit={handleLogin}>
          <input type="text" placeholder="Digite seu email..." 
          value={email}  onChange={(e)=> setEmail(e.target.value )}/>

          <input type="password" placeholder="**********" 
          value={senha}  onChange={(e)=> setSenha(e.target.value )}/>

          <button type="submit"> Acessar </button>

        </form>
        <Link to="register" className="foot"> Não possui uma conta ? Cadastre-se </Link>
     



      </div>
    );
  } 
  
  export default Login;