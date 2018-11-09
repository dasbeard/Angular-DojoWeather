import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
  tempAvg;
  tempHigh;
  tempLow;
  humidity;
  status;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('burbank')
      .then(weather => {
        this.tempAvg = Math.floor(weather.main.temp * (9 / 5) - 459.67);
        this.tempHigh = Math.floor(weather.main.temp_max * (9 / 5) - 459.67);
        this.tempLow = Math.floor(weather.main.temp_min * (9 / 5) - 459.67);
        this.humidity = weather.main.humidity;
        this.status = weather.weather[0].main;
      })
  }

}
