import React, { Component } from 'react';
import './menu.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import Landing from "./Landing";
export default class Menu extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        collapseID: "",
        redirect: false
    }
    toggleCollapse = collapseID => () => this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    toggle = nr => () => {
        let modalNumber = "modal" + nr; this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        return (
            <div>
                <MDBNavbar color=""  id="navbarCollapse3" dark expand="md" fix >
                    <MDBNavbarBrand>
                        <div id="contentlogo"><img src="https://cdn.discordapp.com/attachments/1032294349926567967/1032968404790943794/logo_lakozia.png" alt="logo" id="logo" /></div>
                        
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse  isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>
                                <MDBNavItem >
                                    <MDBNavLink to="/" className="nav-header">CUISINE</MDBNavLink>
                                </MDBNavItem>
                        </MDBNavbarNav>
                        
                        <MDBNavbarNav right >
                                <MDBNavItem  id="liste">
                                    <MDBNavLink to="/" className="nav-header">Accueil</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem  id="liste">
                                    <MDBNavLink to="/Actualite" className="nav-header">Actualités</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem id="liste" >
                                    <MDBNavLink to="/tousLesAteliers" className="nav-header">Offres</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem  id="liste">
                                    <MDBNavLink to="/apropos" className="nav-header">A propos</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem id="liste">
                                    <MDBNavLink  to="/contact" className="nav-header">Contact</MDBNavLink>
                                </MDBNavItem>
                            <MDBNavItem id="liste">
                                <MDBNavLink to="/login" className="nav-header" rounded onClick={this.toggle(1)}>Connexion</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <section id="banner">
                    {/* <Landing/> */}
                </section>
            </div>
        );
    }
}