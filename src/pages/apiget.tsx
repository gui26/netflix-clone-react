import axios, {} from 'axios'
import { type } from 'os';
import { useState } from 'react';
import { json } from 'stream/consumers';
import {api} from './../../src/services/api'


export const Apiget = ()=>{

 const [dados, setDados] = useState("");

const BaseUrl = "https://viacep.com.br/ws/01001000/json/";





///const Endereço = async () =>{
 //const data = await fetch(BaseUrl)

//.then(response => response.json())
//.then(json => console.log(json))
//return data;

    
//};
//Endereço();

 const MetodoGET = async () =>{

      axios.get(BaseUrl)
  .then( (Response) =>{
        let info =  Response.data
          setDados(info)
          console.log(info)
         return info;

   })
     .catch((err)=>console.log(err))
 }
 MetodoGET();
  

    return(
        <div className="container">
            <h1>Requisições http</h1>
            <p>Usando Axios e Fetch para retornar um Json e manipular esses elementos</p>
            <h1>Ola</h1>
        
        </div>
    )
}


export default Apiget;