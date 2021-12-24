import React, { useState, useRef, useLayoutEffect} from "react";
import  {FaPlay}  from "react-icons/fa";
import  {BsFillInfoCircleFill}  from "react-icons/bs";
import  {FaSearch}  from "react-icons/fa";
import  {AiFillBell}  from "react-icons/ai";
import  {BsFillCaretDownFill}  from "react-icons/bs";
import { Menu } from "../componentes/menu";
import  {Flatlist} from "../componentes/Flatlist";
import { Notification } from "../componentes/Notification";
import  {MdArrowBackIosNew}  from "react-icons/md";
import  {MdOutlineArrowForwardIos}  from "react-icons/md";

import Carousel from 'react-elastic-carousel';


export function  Home(){
    
const [showmenu, setShowmenu] = useState(false);
const[display, setDisplay]= useState('teste');
const[notification,setNofication]= useState(false)


const PegarClass  = ()=>{
    setDisplay('teste2')
}
    
const ShowM = () =>{
    setShowmenu(true);
     PegarClass();
}
const hiddemM = () =>{
    setShowmenu(false)
        
}
const SairdaArea = () =>{
    setShowmenu(false)
}

const NotificationDisplay = () =>{
    setNofication(true);
}
return(

        <>
           <div className="container">
              <div className="navbar">
                    <h1 className="Logo">Netflix</h1>
                        <nav className="links">
                            <a href="#">Inicio</a>
                            <a href="#">Séries</a>
                            <a href="#">Filmes</a>
                            <a href="#">Bombando</a>
                            <a href="#">Minha lista</a>
                            <a href="#">Navegar por idiomas</a>                        
                        </nav>
              </div>
           
                 <div className="pro">
                    <FaSearch />
                    <h4>Adulto</h4>
                    <AiFillBell size={24} onMouseEnter={NotificationDisplay}/>
                    <div className="img"></div>

                    <div className="iconClicar" onClick={ShowM} >
                     <BsFillCaretDownFill size={15} color="white" />
                    </div>
                  </div>

                {notification? <Notification onMouseLeave={()=>{
                    setNofication(false)
                }}/>: null }  

                {showmenu ? <Menu onMouseLeave={SairdaArea}/> : null}

{/*  passar propieda      */}

               
        </div>
          <main>
              
              <div className="filme-principal">
              
                   <div className="container2" >
                 
                      <h1 className="Title">The Witcher 2021</h1>
                      <p className="Descripition">O mutante Geralt de Rívia é um caçador de monstros que<br/> 
                      luta para encontrar seu lugar num mundo onde as pessoas <br/>muitas vezes são mais 
                      perversas que as criaturas selvagens.</p>
                    
                      <div className="botoes">
                         <button>
                             <FaPlay size='15px'  className="icon"/>
                          Assistir agora
                         </button> 
                         <button>
                             <BsFillInfoCircleFill size={15}  className="icon"  />
                          Mains informações
                         </button>
                      </div>
                    
                   </div>
               </div>


               <div className="arrowF">
                  <div className="arrowIcon"><MdArrowBackIosNew size={40}/></div>
                   <div  className="arrowIcon"><MdOutlineArrowForwardIos size={40}/></div>
               </div>
              
            <Flatlist title="Recomendados"/>
            <div className="arrowF">
                  <div className="arrowIcon"><MdArrowBackIosNew size={40}/></div>
                   <div  className="arrowIcon"><MdOutlineArrowForwardIos size={40}/></div>
               </div>
            <Flatlist title="Mais vistos"/>


            <div className="arrowF">
                  <div className="arrowIcon"><MdArrowBackIosNew size={40}/></div>
                   <div  className="arrowIcon"><MdOutlineArrowForwardIos size={40}/></div>
               </div>
            <Flatlist title="Em Alta"/>
          </main>



        </>

    )

};

