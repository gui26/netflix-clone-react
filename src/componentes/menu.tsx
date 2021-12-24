import '../styles/menu.scss'
import Avatar from "../../assets/icon.png";



type ButtoProps = {
  onMouseLeave? : any;
}

export  function Menu(props: ButtoProps){


    return(
     <div  id="dropdwon" onMouseLeave={props.onMouseLeave}>
          <div>
            <div className='itenslink'>
               <div className='img'></div>
                <a href="#">Guilherme</a>
            </div>
            
            <div className='itenslink'>
                 <div className='img'></div>
                <a href="#">Poliana</a>
            </div >

            <div className='itenslink'>
                <div className='img'></div>
                <a href="#">Jaqueline</a>
            </div>

            <div className='itenslink'>
                <div className='img'></div>
                <a href="#">Gustavo</a>
               
            </div>

            <div className='border'>
              <a href='#'>Gerenciar perfis</a>
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