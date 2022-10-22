
import React, { Component } from 'react';
import Menu from '../menu/menu';
import Footer from '../foot/foot'
import Carousel from './Carrousel'
const About = () => {
  return (<div>
            <Menu/>
            <Carousel/>
            <div className="row">

            </div>
       <div className="row">
                <div className="col-md-7">
                  <div className="container-fluid">
                    <div className="gauche">
                      <h3 id="titregauche">Suivez Nos Actualités</h3>
                      <div>
                       <img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032295491704201236/mcdonalds-burger-hero-nt1920-1400x500.jpg" alt="logo" id="imagegrand" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                       <img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032295491125387454/deep-dish-pizza-chicago.jpg" alt="logo" id="imagemoyenne" />
                        </div>

                        <div className="col-md-6">
                       <img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032295490844373093/Freshly_Plant-based_felafel_meal.jpeg" alt="logo" id="imagemoyenne" />   
                        </div>

                        
                      </div>
                          <p id="textgauche">CUISINE est heureux de vous montrer ses collections de photos avec leur <br/>
                          propres recettes que ça soit sucré, salé, fast food, healthy food.<br/>
                          Venez nous rejoindre maintenant si vous aussi vous voudriez ...</p>

                        <div  id="affichplus">
                          <a href="/tousLesAteliers" id="test">
                                   <span id=""> Afficher plus ....</span>
                          </a>
                        </div>
   
                    </div>

                  </div>
                </div>
                <div className="col-md-5">
                  <div className="container-fluid">
                    
                    <div id="droit" >
                        <h3>Cuisine</h3>
                        <p >Notre centre de formation offre des ateliers <br/> aux passionnés de cuisine</p>

                        <div id="ligne">
                        </div>
                        <div >
                          <h4> RECHERCHER ICI</h4>
                          <div class="input-group" id="search" >
                            <div class="form-outline">
                              <input id="search-focus" type="search"  class="form-control" />
                              <label class="form-label" for="form1">Search</label>
                            </div>
                            <button type="button" id="bouton" class="btn btn-light">
                              <i class="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                        <div id="ligne">
                        </div>
                        <div>
                          <h4> Suivez-Nous</h4>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-3">
                              <a href="">
                               <img src="facebook.jpg" alt="logo" id="suivre" /></a>
                            </div>
                            <div className="col-md-3">
                            <a href="">
                              <img src="intsa.jpg" alt="logo" id="suivre" /></a>
                            </div>
                            <div className="col-md-3">
                            
                            </div>
                        </div>

                        <div className="row">
                                <div className="col-md-3">
                                
                                </div>
                                <div className="col-md-3">
                                  <a href="">
                                  <img src="twit.jpg" alt="logo" id="suivre" /></a>
                                </div>
                                <div className="col-md-3">
                                  <a href="">
                                  <img src="link.jpg" alt="logo" id="suivre" /></a>
                                </div>
                                <div className="col-md-3">
                                 
                                </div>
                                <a href="" id="voirplus">
                                   <span id=""> Voir plus</span>
                                </a>
                        </div>
                    </div>

                  </div>
                </div>
              </div>

              
              <Footer/>
    </div>
    
  );
};
  
export default About;