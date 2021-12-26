import { useState } from 'react';
import './../styles/header.scss';
import { Notification} from '../componentes/Notification';
import { Menu } from './menu';
import  {FaSearch}  from "react-icons/fa";
import  {AiFillBell}  from "react-icons/ai";
import  {BsFillCaretDownFill}  from "react-icons/bs";
import { Link} from   'react-router-dom';

type Propriedades={
    className: any;
}


export const Header = (props:Propriedades)=>{

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
            <div className={props.className}>
                
                <div className="navbar">
                    <h1 className="Logo">Netflix</h1>
                        <nav className="links">
                           <Link to={'Apiget'}><a href="#">Inicio</a></Link> 
                            <a href="#">Séries</a>
                            <a href="#">Filmes</a>
                            <a href="#">Bombando</a>
                            <a href="#">Minha lista</a>
                            <a href="#">Navegar por idiomas</a>                        
                        </nav>
              </div>
           
                 <div className="header-area-profile">
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



                
           
        </div>
    )
}
export default Header;