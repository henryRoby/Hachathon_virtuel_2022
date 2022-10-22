import React, { Component } from 'react';
import Menu from '../menu/menu';
import Footer from '../foot/foot'
import  SendMail from "./sendmail";
class Contact extends Component {
  
 
    render() { 
        return (<div>
            
            <Menu/>
            
        <div class="demo-wrap">
                <div className="container-fluid" id="grandimageacueil">
                    <div className="row">
                        <img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032958312901263431/Sans_titre-1.jpg" alt="logo" id="imageacueil" /> 
                       <div className="col-md-1">
                        
                       </div>
                       <div id="ide"className="col-md-5">
                         <h3 id="idees"> Des idées</h3>
                         <p id="idee"> pour les meilleures recettes culunaire</p>
                         <button id="botton">
                         <a href="/Actualite" id="spanaccueil"><span > N'hesitez pas à nous contacter</span></a>
                        </button>
                       </div>
                       <div className="col-md-5">
                       
                       </div>
                       <div className="col-md-1">
                        
                       </div>
                    </div>
                </div>
                <SendMail/>
             </div>
             <Footer/>
             </div>
        )
      }
}
export default Contact; 