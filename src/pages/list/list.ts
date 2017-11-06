import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HnbProvider } from '../../providers/hnb/hnb';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


  

    
    tecaj: any;
    valute: any;
  
    unos1: string;
    unos2: string;
    datum: Date;

    lista_valuta: string[] =[
      "AUD", "CAD", "CZK", "DKK", "HUF",
      "JPY", "NOK", "SEK", "CHF", "GBP",
      "USD", "EUR", "PLN"
    ];
  
    constructor(public navCtrl: NavController,
    private hnbProvider:HnbProvider
    ) {
  
    }

    ionViewWillEnter(){
      
        this.hnbProvider.getTecajFull().subscribe(valute => {
          this.valute = valute;
         });

         
      
  
    }
  
      saveForm(unos1: string, unos2: string){
        this.hnbProvider.getTecajViseValuta(this.unos1, this.unos2).subscribe(tecaj => {
          this.tecaj = tecaj;
         });
      }
  
  
      /*GetTecajDatum(datum: Date){
        this.hnbProvider.getTecajDatum(this.datum).subscribe(tecaj => {
          this.tecaj = tecaj;
         });
      }*/
  


















  /*selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }*/
}
