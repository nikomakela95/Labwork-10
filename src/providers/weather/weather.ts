import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = '294286f3174bece8';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q'
  }

  getWeather(country, city){
    return this.http.get(this.url+'/'+country+'/'+city+'.json')
    .map(res => res.json());
    }

}
