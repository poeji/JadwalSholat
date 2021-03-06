import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(public http:Http) {
        console.log('Data Service connected...');
     }

     getPosts() {
         return this.http.get('http://muslimsalat.com/jakarta/daily.json')
         .map(res => res.json());
     }

}