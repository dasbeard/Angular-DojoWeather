import { Injectable } from '@angular/core';
import 'rxjs';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {
  weatherAPI: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  APIKey: string = '&APPID=01b74b4772a8ae955abce55b12a44585';

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(this.weatherAPI + city + this.APIKey)
      .map(data => data.json())
      .toPromise();
  }

}
