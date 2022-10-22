import React, { Component } from 'react';
//import Popup from './pop';
import Menu from '../menu/menu';
import Footer from '../foot/foot'
class Apropos extends Component {
  
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
                     <h3 id="idees"> Notre equipe</h3>
                     <p id="idee"> Vous allez decouvrir nos equipe juste en cliquant sur cette boutton hihihi !!! </p>
                     <button id="botton">
                     <a href="/apropos" id="spanaccueil"><span > Click-me </span></a>
                    </button>
                   </div>
                   <div className="col-md-5">
                   
                   </div>
                   <div className="col-md-1">
                    
                   </div>

                   
                </div>

                <div className="row">
                    <div className="col-md-4">
                      <div class="card">
                      <img id="imageapropos" src="sambatra.png" class="card-img-top" alt="Fissure in Sandstone"/>
                      <div class="card-body">
                      <center>
                          <h5 class="card-title">Sambatra</h5>
                          <p class="card-text">Responsable Marketing digital</p>
                          </center>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <img id="imageapropos" src=" princy.png" class="card-img-top" alt="Fissure in Sandstone"/>
                    <div class="card-body">
                    <center>
                        <h5 class="card-title"> Princy</h5>
                        <p class="card-text">Responsable graphique designer</p>
                        </center>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                    <img id="imageapropos" src=" henry.png" class="card-img-top" alt="Fissure in Sandstone"/>
                    <div class="card-body">
                      <center>
                        <h5 class="card-title"> Henry</h5>
                        <p class="card-text">Responsable technique et developpement</p>
                        </center> 
                    </div>
                    </div>
                    </div>
                </div>
                
            </div>
         </div>
         <Footer/>
         </div>
    )
  }
}
export default Apropos; 