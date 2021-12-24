import React, { useState, useRef, useLayoutEffect, useEffect} from "react";
import  {FaPlay}  from "react-icons/fa";
import  {BsFillInfoCircleFill}  from "react-icons/bs";
import  {Flatlist} from "../componentes/Flatlist";
import  {MdArrowBackIosNew}  from "react-icons/md";
import  {MdOutlineArrowForwardIos}  from "react-icons/md";

import Carousel from 'react-elastic-carousel';
import Header from "../componentes/header";


export function  Home(){
    
const [NavBar, setNavBar] = useState('container-header');
const[display, setDisplay]= useState('teste');
const[notification,setNofication]= useState(false);


useEffect( ()=>{

 const scrolllistener = () =>{
        if (window.scrollY > 10) {
            setNavBar('container-black');          
        } else {
        setNavBar('container-header');;
        }
    }
   window.addEventListener('scroll', scrolllistener);
 return () => {
    window.removeEventListener('scroll', scrolllistener);
}

},[])



return(

        <>
           <div className="container">
               <Header className={NavBar}/>
              
{/*  passar propiedades      */}

               
        </div>
          <main>
              
              <div className="filme-principal">
              
                   <div className="container2" >
                     <div className="gradient-to-bottom"></div>
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

