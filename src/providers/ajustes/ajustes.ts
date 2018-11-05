import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class AjustesService {

  ajustes = {
    mostrar_tutorial: true
  }
  constructor( 
    private platform: Platform,
    private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage() {

    let promesa = new Promise( (resolve, reject) => {
    
      if ( this.platform.is("cordova") ) {
        // Device
        console.log("Inicializando storage");
        this.storage.get("ajustes")
            .then( ajustes => {

              if ( ajustes ) {
                this.ajustes = ajustes;
              }
                
            resolve();
            
        });

      } else {
        // Desktop
        if ( localStorage.getItem("ajustes") ){
          this.ajustes = JSON.parse( localStorage.getItem("ajustes") );
        }
        resolve();      
      }

    });

    return promesa;    
  }

  guardar_storage() {
    
    if ( this.platform.is("cordova") ) {
      // Device
      this.storage.set("ajustes", this.ajustes);
    } else {
      // Desktop
      localStorage.setItem("ajustes", JSON.stringify( this.ajustes ));
    }
  }

}
