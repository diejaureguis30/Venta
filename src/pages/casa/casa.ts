import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {
  imagen='';
  lugar='';
  precio='';
  vendedor='';
  telefono='';
  estatus='';
  cuartos='';
  banos='';
  casa='';
  favoritos=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casa=this.navParams.get('casas');
    this.imagen=this.navParams.get('casas').imagen;
    this.precio=this.navParams.get('casas').precio;
    this.vendedor=this.navParams.get('casas').vendedor;
    this.cuartos=this.navParams.get('casas').cuartos;
    this.banos=this.navParams.get('casas').banos;
    this.telefono=this.navParams.get('casas').telefono;
    this.lugar=this.navParams.get('casas').lugar;
    this.favoritos=this.navParams.get('favs');
  }
  Agregar(){

    // this.favoritos.push({lugar:this.lugar,precio:this.precio,vendedor:this.vendedor, imagen:this.imagen})
    this.favoritos.push(this.casa);
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }

}
