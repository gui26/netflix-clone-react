import { type } from "os";
import React from "react";
import './../styles/flat.scss';
type TitleProps={
    title: string;
}

export function Flatlist(props: TitleProps){
    return(
        <div className="containergeral">
        <h3 className="title2">{props.title}</h3>
        <div className="container3">
            
            <div className="list">

                    <div className="item">
                        <div className="capa1"></div>
                       
                    </div>

                    <div className="item">
                       <div className="capa2"></div>
                       
                    </div>

                    <div className="item">
                      <div className="capa3"></div>
                       
                    </div>

                    <div className="item">
                      <div className="capa4"></div>
                       
                    </div>

                    <div className="item">
                       <div className="capa5"></div>
                       
                    </div>

                    <div className="item">
                     <div className="capa6"></div>
                       
                    </div>
                    <div className="item">
                     <div className="capa7"></div>
                       
                    </div>
                  
                    <div className="item">
                     <div className="capa6"></div>
                       
                    </div>
                  
                    <div className="item">
                     <div className="capa6"></div>
                       
                    </div>
                  

                  



            </div>
            



        </div>

        
        
        </div>
       
    )
}

