import '../styles/menu.scss'
import Avatar from "../../assets/icon.png";

export  function Menu(){


    return(
     <div  id="dropdwon">
          <div>
            <div className='itenslink'>
               <div className='img'></div>
                <a href="#">Guilherme</a>
            </div>
            
            <div className='itenslink'>
                 <div className='img'></div>
                <a href="#">Podivana</a>
            </div >

            <div className='itenslink'>
                <div className='img'></div>
                <a href="#">Jaquedivne</a>
            </div>

            <div className='itenslink'>
                <div className='img'></div>
                <a href="#">Gustavo</a>
               
            </div>

            <div className='border'>
              <a>Gerenciar perfis</a>
            </div>

            <div className='central'>
              <a href="#">Conta</a>
              <a href="#">Central de ajuda</a>
              <a href="#">Sair da Netflix</a>
            </div>
             
        </div>

    </div>
    )

}