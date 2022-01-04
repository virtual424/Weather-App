class Forecast {
  constructor(date, day, time, highTemp, lowTemp, humidity, weather, icon) {
    this.date = date;
    this.day = day;
    this.time = time;
    this.highTemp = highTemp;
    this.lowTemp = lowTemp;
    this.humidity = humidity;
    this.weather = weather;
    this.icon = icon;
  }
}

export default Forecast;
