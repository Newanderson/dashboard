
import '../Home/index.css';

//icons dash
import { SiAnalogue } from "react-icons/si";
import { AiFillStop } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";



function Dashboard (){
    return(
        
        <main>
        
                <h1>Dashboard</h1>

                <div className='date'>
                     <input type="date"></input>
                </div>

                <div className='standard'>
                   <div className='total-orders'>
                      <span> <SiAnalogue /></span>
                  <div className='midle'>
                    <div className='left'>
                        <h3>Total de  vendas</h3>
                        <h1>R$883.52</h1>

                       </div>
                       <div className='progress'>
                        <svg className='svvg'>
                            <circle cx='38' cy='38' r='36'></circle>
                            
                        </svg>
                        <div className='number'>
                                <p>91%</p>
                            </div>
                    </div>

                  </div>
                 <p className='text-small'>últimas 24 horas</p>

                </div>


                <div className='total-stop's>
                      <span> <AiFillStop /></span>
                  <div className='midle'>
                    <div className='left'>
                        <h3>Pedidos parados</h3>
                        <h1>R$325.50</h1>

                       </div>
                       <div className='progress'>
                        <svg className='svvg'>
                            <circle cx='38' cy='38' r='36'></circle>
                            
                        </svg>
                        <div className='number'>
                                <p>54%</p>
                            </div>
                    </div>

                  </div>
                 <p className='text-small'>últimas 24 horas</p>

                </div>


                <div className='ticket'>
                      <span> <FaMoneyCheckAlt /></span>
                  <div className='midle'>
                    <div className='left'>
                        <h3>Boleto aberto</h3>
                        <h1>R$252.10</h1>

                       </div>
                       <div className='progress'>
                        <svg className='svvg'>
                            <circle cx='38' cy='38' r='36'></circle>
                            
                        </svg>
                        <div className='number'>
                                <p>77%</p>
                            </div>
                    </div>

                  </div>
                 <p className='text-small'>últimas 24 horas</p>

                </div>



            



  </div>

                
                <div className='orders'>
                  <h2> Todos os pedidos </h2>
                  <table>
                    <thead>
                        <tr>
                            <th className='cpf'>CNPJ/CPF </th>
                            <th>N* Pedido </th>
                            <th className='pag'>Pagamento </th>
                            <th>Status </th>
                            <tr></tr>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Matheus stand</td>
                            <td>2586</td>
                            <td>Pendente</td>
                            <td className='status-all'>Separado</td>
                            <td className='details'>Detalhes</td>
                        </tr>
                        <tr>
                            <td >Cicero nielton</td>
                            <td>7886</td>
                            <td >Aberto</td>
                            <td className='status-all'>Parado</td>
                            <td className='details'>Detalhes</td>
                        </tr>
                        <tr>
                            <td > Rafael Oliveira</td>
                            <td>3586</td>
                            <td >Finalizado</td>
                            <td className='status-all'>Enviado</td>
                            <td className='details'>Detalhes</td>
                        </tr>
                        <tr>
                            <td>Athos araujo</td>
                            <td>2574</td>
                            <td >Aberto</td>
                            <td className='status-all'>Parado</td>
                            <td className='details'>Detalhes</td>
                        </tr>
                        <tr>
                            <td >Nelton thierry</td>
                            <td>2248</td>
                            <td >Aberto</td>
                            <td className='status-all'>Parado</td>
                            <td className='details'>Detalhes</td>
                        </tr>
                    </tbody>
                  
                  </table>
                  <h5 className='all'>Mostra todos</h5>

                </div>

              
            </main>
    )
}

export default Dashboard;