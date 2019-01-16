import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CasaPage } from '../casa/casa';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugar='';
  precio='';
  cuartos='';
  baños='';
  casas=[];

  favoritos=[];
  Casas=[{id:0, lugar: "Villa Universitaria", precio: "$1500/mes", estatus:"Renta", cuartos:"2", banos:"1", imagen:"../assets/img1.jpg",vendedor:"Maria Raquel Mendienta Lozano", telefono:" 3336101081"},
  {id:1, lugar: "Colonia Analco", precio: "$3'900,000", estatus:"Venta", cuartos:"5", banos:"3", imagen:"../assets/img2.jpg",vendedor:"Ricardo Sotomayor Mendoza", telefono:"3331274254"},
  {id:2, lugar: "Verde Valle", precio: "$9,000/mes", estatus:"Renta", cuartos:"3", banos:"2", imagen:"../assets/img3.jpeg",vendedor:"Liliana Hernández Luquín", telefono:"3313522431"},
  {id:3, lugar: "Puerta de Hierro", precio: "$14'490,000", estatus:"Venta", cuartos:"4", banos:"4", imagen:"../assets/img4.jpg",vendedor:"Fernando Toledo", telefono:"3314578525"},
  {id:4, lugar: "Chapalita", precio: "$5'100,000", estatus:"Venta", cuartos:"4", banos:"3", imagen:"../assets/img5.jpg",vendedor:"Fernando Toledo", telefono:"3314578525"},
  {id:5, lugar: "Valle Real", precio: "$14,990", estatus:"Renta", cuartos:"3", banos:"3.5", imagen:"../assets/img6.jpg",vendedor:"IGEA", telefono:"3320149095"},
  {id:6, lugar: "Tabachines", precio: "$1'730,000", estatus:"Venta", cuartos:"3", banos:"2", imagen:"../assets/img7.jpg",vendedor:" Jose Luis Garcia Cardenas", telefono:"2002-2400"},
  {id:7, lugar: "Bugambilias", precio: "$1'730,000", estatus:"Venta", cuartos:"3", banos:"2", imagen:"../assets/img8.jpg",vendedor:" Jose Luis Garcia Cardenas", telefono:"2002-2400"},
  {id:8, lugar: "Colón Industrial", precio: "$1'730,000", estatus:"Venta", cuartos:"3", banos:"2", imagen:"../assets/img9.jpg",vendedor:" Fernando Madrigal Díaz", telefono:"31232337"},
  {id:9, lugar: "Providencia", precio: "$4100", estatus:"Renta", cuartos:"2", banos:"2", imagen:"../assets/img10.jpg",vendedor:" Priscila Foncerrada Cuevas", telefono:"3331674107"},
  {id:10, lugar: "Americana", precio: "$10200", estatus:"Renta", cuartos:"4", banos:"3", imagen:"../assets/img11.png",vendedor:" Maria Teresa Grageda Vasquez", telefono:"3316402751"},
  {id:11, lugar: "Santa Tere", precio: "$1'600,000", estatus:"Venta", cuartos:"4", banos:"2.5", imagen:"../assets/img12.jpg",vendedor:"Cecilia Renteria Ibarra", telefono:"1657-2969"}];
  cas=CasaPage;
  fav=FavoritosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  verCasa(c){
    this.navCtrl.push(this.cas,{favs:this.favoritos,casas:c})
  }
  VerFav(){
    this.navCtrl.push(this.fav,{favs:this.favoritos})
  }

}
