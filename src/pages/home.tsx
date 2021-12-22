import React, { useState } from "react";
import  {FaPlay}  from "react-icons/fa";
import  {BsFillInfoCircleFill}  from "react-icons/bs";
import  {FaSearch}  from "react-icons/fa";
import  {AiFillBell}  from "react-icons/ai";
import Carousel from 'react-elastic-carousel';


const baseURL ='https://youtu.be/tjujvMkqWe4';


export function  Home(){
 
    
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
                    <AiFillBell size={24} />
                    <div className="img"></div>
                </div>
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

              
           </main>



        </>

    )

};

