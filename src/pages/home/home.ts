import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HnbProvider } from '../../providers/hnb/hnb';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tecaj: any;

  unos1: string;
  unos2: string;
  datum: Date;

  constructor(public navCtrl: NavController,
  private hnbProvider:HnbProvider
  ) {

  }

    /*saveForm(unos1: string, unos2: string){
      this.hnbProvider.getTecajViseValuta(this.unos1, this.unos2).subscribe(tecaj => {
        this.tecaj = tecaj;
       });
    }*/

    ionViewWillEnter(){
    
      this.hnbProvider.getTecajFull().subscribe(tecaj => {
        this.tecaj = tecaj;
       });
    

  }

    GetTecajDatum(datum: Date){
      this.hnbProvider.getTecajDatum(this.datum).subscribe(tecaj => {
        this.tecaj = tecaj;
       });
    }

    


}

