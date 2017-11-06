import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HnbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HnbProvider {

  url;

  constructor(public http: Http) {
    console.log('Hello HnbProvider Provider');
    this.url = 'http://api.hnb.hr/tecajn';
  }


  getTecajFull(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getTecajViseValuta(valuta1, valuta2){
    return this.http.get(this.url+'?valuta='+valuta1+'&valuta='+valuta2)
    .map(res => res.json());
  }

  getTecajJednaValuta(valuta){
    return this.http.get(this.url+'?valuta='+valuta)
    .map(res => res.json());
  }

  getTecajDatum(datum){
    return this.http.get(this.url+'?datum='+datum)
    .map(res => res.json());
  }

  getTecajRazdoblje(datum1, datum2){
    return this.http.get(this.url+'?datum-od='+datum1+'&datum-do='+datum2)
    .map(res => res.json());
  }






}
