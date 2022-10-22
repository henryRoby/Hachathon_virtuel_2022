import React, { Component } from 'react';
import Menu from '../menu/menu';
import Footer from '../foot/foot'
class Apropos extends Component {

    render() {
        return (<div>

            <div class="demo-wrap">
                <div className="row">
                    <div className="col-md-7">
                        <div className="container-fluid">
                            <div className="gauche">
                                <h3 id="titregauche"> TOUTES NOS OFFRE POUR VOUS</h3>
                                <div id="rowgauche" className="row">
                                    <div className="col-md-6">
                                        <img src="formations.jfif" alt="logo" id="imageoffre" />
                                    </div>
                                    <div className="col-md-6">
                                        <div id="ligne"></div>
                                        <h3 id="titregauche">Formations</h3>
                                        <div id="ligne"></div>
                                    </div>
                                </div>
                                <div id="rowgauche" className="row">
                                    <div className="col-md-6">
                                        <img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032295386750136421/Cours-de-cuisine-en-live-Atelier-des-chefs-600x400.jpg" alt="logo" id="imageoffre" />
                                    </div>
                                    <div className="col-md-6">
                                        <div id="ligne"></div>
                                        <h3 id="titregauche">Tutoriels</h3>
                                        <div id="ligne"></div>
                                    </div>
                                </div>
                                <div id="rowgauche" className="row">
                                    <div className="col-md-6">
                                        <img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032295386410405918/livres-cuisine-recettes.jpg" alt="logo" id="imageoffre" />
                                    </div>
                                    <div className="col-md-6">
                                        <div id="ligne"></div>
                                        <h3 id="titregauche">Livres</h3>
                                        <div id="ligne"></div>
                                    </div>
                                </div>
                                <p id="textgauche">CUISINE est heureux de vous montrer ses collections de photos avec leur <br />
                                    propres recettes que ça soit sucré, salé, fast food, healthy food.<br />
                                    Venez nous rejoindre maintenant si vous aussi vous voudriez ...</p>

                                <div id="affichplus">
                                    <a href="" id="test">
                                        <span id=""> Afficher plus ....</span>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container-fluid">

                            <div id="droitOffre" >
                                <h3>Cuisine</h3>
                                <p >Notre centre de formation offre des ateliers <br /> aux passionnés de cuisine</p>

                                <div id="ligne">
                                </div>
                                <div >
                                    <h4> RECHERCHER ICI</h4>
                                    <div class="input-group" id="search" >
                                        <div class="form-outline">
                                            <input id="search-focus" type="search" class="form-control" />
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

            </div>

        </div>
        )
    }
}
export default Apropos; 