import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SwiftSlider from 'react-swift-slider'

const data =  [
    {'id':'1','src':'https://cdn.discordapp.com/attachments/1032294349926567967/1032295386108407848/red-velvet-cake-slice.jpg'},
    {'id':'2','src':'https://cdn.discordapp.com/attachments/1032294349926567967/1032295591125979166/pexels-ella-olsson-1640774.jpg'},
    {'id':'3','src':'https://cdn.discordapp.com/attachments/1032294349926567967/1032295491418992782/2022-cen-halloweenentertaining-hp-ccoverlay-image-final._TTW_._CR0021601296_._SR1500900_._QL100_.jpg'},
    {'id':'4','src':'https://cdn.discordapp.com/attachments/1032294349926567967/1032295490127142992/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg'},
    {'id':'5','src':'https://cdn.discordapp.com/attachments/1032294349926567967/1032295386410405918/livres-cuisine-recettes.jpg'}
  ];
  
  class Carrousel extends Component {
    render() {
      return (<div>
                <SwiftSlider data={data}/>
                <h1 id="h1coroussel">Lakozia ❤️ Life</h1>
            </div>
      );
    }
  }
  export default Carrousel