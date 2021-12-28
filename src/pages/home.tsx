import React, { useState, useRef, useLayoutEffect, useEffect} from "react";
import  {FaPlay}  from "react-icons/fa";
import  {BsFillInfoCircleFill}  from "react-icons/bs";
import  {AiFillCloseCircle}  from "react-icons/ai";
import  {Flatlist} from "../componentes/Flatlist";
import  {MdArrowBackIosNew}  from "react-icons/md";
import  {MdOutlineArrowForwardIos}  from "react-icons/md";
import Carousel from 'react-elastic-carousel';
import Header from "../componentes/header";
import  Modal  from 'react-modal';




export function  Home( ){


const [NavBar, setNavBar] = useState('container-header');
const[listsleft,setListsleft] = useState('container3');
const[modalIsOpen, setIsOpen]= useState(false);
const[estilo, setEstilo] =useState('modalstyle');


const openModal = () =>{
 setIsOpen(true);
}

const closeModal = () =>{
    setIsOpen(false);
}

const MoverLeft = () =>{
    setListsleft('container4')
}




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
                      <h1 className="Title">The Witcher</h1>
                      <p className="Descripition">O mutante Geralt de Rívia é um caçador de monstros que<br/> 
                      luta para encontrar seu lugar num mundo onde as pessoas <br/>muitas vezes são mais 
                      perversas que as criaturas selvagens.</p>
                    
                      <div className="botoes">
                         <button>
                             <FaPlay size='15px'  className="icon"/>
                          Assistir agora
                         </button> 
                         <button onClick={openModal} >
                             <BsFillInfoCircleFill size={15}  className="icon" />
                          Mains informações
                         </button>
                      </div>
                    
                   </div>
               </div>

             <Modal
                isOpen ={modalIsOpen}
                style={{

                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.336)'
                      },
         
                    content: {
                        display:'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent:'center',
                        position: 'relative',
                        width:'650px',
                        height:'525px',
                        top: '70px',
                        left: '350px',
                        right: '40px',
                        bottom: '40px',
                        border: 'none',
                        background: " rgb(0, 0, 0)",
                        overflow: 'hidden',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '20px'
                      }

                }}
                
                onRequestClose={closeModal}
                bodyOpenClassName='modalViews'
                >
              
                     <div className="imgModal"></div>
                     <div><AiFillCloseCircle onClick={closeModal} size={25} className="iconFecarModal"/></div>
             

                


                       <div className="texts">
                        <h2>The Witcher</h2>
                    
                        <p>O mutante Geralt de Rívia é um caçador de monstros que luta para <br></br>encontrar seu 
                        lugar em um mundo onde as pessoas, muitas vezes, são mais perversas do que as criaturas selvagens.</p>
                           
                           
                      </div> 
                      

                        <div>
                        <button className="butonmodal">
                            Assistir
                        </button>

                        <button className="butonmodal">
                            Trailer
                        </button>
                            
                        </div>      
             </Modal>
               
           
            <div className="arrowF" onClick={MoverLeft}>
                  <div className="arrowIcon"><MdArrowBackIosNew size={40}/></div>
                   <div  className="arrowIcon"><MdOutlineArrowForwardIos size={40}/></div>
               </div>
            <Flatlist container={listsleft} title="Mais vistos"/>

            <div className="arrowF" onClick={MoverLeft}>
                  <div className="arrowIcon"><MdArrowBackIosNew size={40}/></div>
                   <div  className="arrowIcon"><MdOutlineArrowForwardIos size={40}/></div>
               </div>
            <Flatlist container={listsleft} title="Em alta"/>


            <div className="arrowF" onClick={MoverLeft}>
                  <div className="arrowIcon"><MdArrowBackIosNew size={40}/></div>
                   <div  className="arrowIcon"><MdOutlineArrowForwardIos size={40}/></div>
               </div>
            <Flatlist container={listsleft} title="Recomendados"/>

          </main>

        </>

    )

};

