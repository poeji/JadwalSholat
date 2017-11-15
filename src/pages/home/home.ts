import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  time24h: Date;
  data: any = null;
  posts: null;
  items: string;
  kota: string;
  state: string;
  date_for: string;
  fajr: string;
  shurooq: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  
  //jam menggunakan momment
  hari = moment().format('dddd');
  waktu = moment().format('D MMM YYYY - HH:mm');

  constructor(public navCtrl: NavController, 
    public http: Http) {
  }
    
    ngOnInit() {
      //console.log("Sekarang: "+moment.locale());
      this.http.get('http://muslimsalat.com/jakarta/daily.json').map(res => res.json()).subscribe(data => {
          this.posts = data;
          this.kota = data.state;
          this.fajr = data.items[0].fajr;
          this.asr = data.items[0].asr;
          this.shurooq = data.items[0].shurooq;
          this.dhuhr = data.items[0].dhuhr;
          this.maghrib = data.items[0].maghrib;
          this.isha = data.items[0].isha;
      });
  }

}
