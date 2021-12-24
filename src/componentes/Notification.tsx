import React from "react";
import  './../styles/notification.scss';

type MouseProps = {
    onMouseLeave? : any;
}

export const Notification = (props: MouseProps)=>{
    return(
        <div className="Container-notification" onMouseLeave={props.onMouseLeave}>
            <div className="Container-principal">
                 
                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>


                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>

                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>

                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>
                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>

                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>
                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>

                 <div className="item-notification">
                     <div className="img"></div>
                     <div className="texts">
                         <h3>Novidade o Melhor</h3>
                         <p>Há 2 meses.</p>
                     </div>

                 </div>




            </div>
        </div>
    )
}

export default Notification;