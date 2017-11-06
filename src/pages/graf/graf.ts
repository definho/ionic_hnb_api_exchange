import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HnbProvider } from '../../providers/hnb/hnb';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';


@Component({
  selector: 'page-graf',
  templateUrl: 'graf.html'
})
export class GrafPage {
  @ViewChild('lineCanvas') lineCanvas;
  
  lineChart: any;

  tecaj: any;
  lista_valuta: string[] =[
    "AUD", "CAD", "CZK", "DKK", "HUF",
    "JPY", "NOK", "SEK", "CHF", "GBP",
    "USD", "EUR", "PLN"
  ];
  array = [];
  datumi= [];
  testni = [1, 2, 3, 4];

  datum_poc: Date;
  datum_kraj = new Date().toISOString();
  o_valuta: string;


  constructor(
    public navCtrl: NavController,
    private hnbProvider:HnbProvider,
    private datePicker: DatePicker
  ) {
    
  }

  ionViewDidLoad() {
  }

  dobavi_podatke(datum_poc, datum_kraj){
    console.log(datum_kraj, datum_poc);
    this.hnbProvider.getTecajRazdoblje(datum_poc, datum_kraj).subscribe(tecaj => {
      this.tecaj = tecaj;

      //console.log(tecaj);
      console.log(this.o_valuta, this.datum_poc, this.datum_kraj);


      let i = 0;
      for (var key in this.tecaj) {
        if (this.tecaj[key].valuta == this.o_valuta){
          this.array[i] = parseFloat(this.tecaj[key].srednji_tecaj.replace(/,/, '.'));
          this.datumi[i] = this.tecaj[key].datum;
          i++;
        }
    }

     

     this.array.forEach(element => {
      console.log(element);
     });
     this.datumi.forEach(element => {
      console.log(element);
     });
    

      
    
     if (this.lineChart){
       console.log("updatee");
      this.lineChart.destroy(); // bez ovog je graf buggy
     }
     
     
 
  
     

    
     
       console.log("prvi put pozivamo");
     
     this.lineChart = new Chart(this.lineCanvas.nativeElement, 
     
      {
      
      
                 type: 'line',
                 data: {
                     labels: this.datumi,
                     datasets: [
                         {
                             label: this.o_valuta,
                             fill: false,
                             lineTension: 0.1,
                             backgroundColor: "rgba(75,192,192,0.4)",
                             borderColor: "rgba(75,192,192,1)",
                             borderCapStyle: 'butt',
                             borderDash: [],
                             borderDashOffset: 0.0,
                             borderJoinStyle: 'miter',
                             pointBorderColor: "rgba(75,192,192,1)",
                             pointBackgroundColor: "#fff",
                             pointBorderWidth: 1,
                             pointHoverRadius: 5,
                             pointHoverBackgroundColor: "rgba(75,192,192,1)",
                             pointHoverBorderColor: "rgba(220,220,220,1)",
                             pointHoverBorderWidth: 2,
                             pointRadius: 1,
                             pointHitRadius: 10,
                             data: this.array,
                             spanGaps: false,
                         }
                     ]
                 }
      
             });
            
             
            });
            }




            
          }
        

     //console.log(this.tecaj);
  




