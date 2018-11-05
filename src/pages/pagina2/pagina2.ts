import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ir_pagina3() {
    this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad() {
    console.log("1. ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log("2. ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("3. ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("4. ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("5. ionViewDidLeave");
  }

  ionViewWillUnload() {
    console.log("6. ionViewWillUnload");
  }

  ionViewCanEnter() {
    console.log("7. ionViewCanEnter");

    let promesa = new Promise( ( resolve, reject )=>{
      let comfirmar = this.alertCtrl.create({
        title: "Seguro?",
        subTitle: "Está seguro que desea entrar?",
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Seguro',
            handler: () => resolve(true)
          }
        ]
      })
  
      comfirmar.present();
    });

    return promesa;   

    // let numero = Math.round(Math.random() * 10);
    // console.log(numero);

    // if ( numero > 3) {
    //   return true;
    // } else {
    //   return false;
    // }    

  }

  ionViewCanLeave() {    
    console.log("8. ionViewCanLeave");
    console.log("Espere 2 segundos para salir");

    let loaging = this.loadingCtrl.create({
      content: "Wait please..."
    });

    loaging.present();

    let promesa = new Promise( ( resolve, reject )=> {

      setTimeout( ()=> {
        loaging.dismiss();
        resolve( true )
      }, 2000);

    })

    return promesa;
  }
}
