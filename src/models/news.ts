// export interface INewsItem {
//     id: number;
//     title: string;
//     text: string;
//     link: string;
//     timestamp: Date;
//   }

export interface INewsItem {

  daily: [ {
    clouds: number;
    dew_point: number;
    dt: number;

    feels_like: {
      day: number;
      eve: number;
      morn: number;
      night: number;
    };
    humidity: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    pop: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      eve: number;
      max: number;
      min: number;
      morn: number;
      night: number;
    };
    uvi: number;
    weather:[ {
      description: string;
      icon: string;
      id: number;
      main: string;
    }];
    wind_deg: number
    wind_gust: number
    wind_speed: number
  }];


}

export interface INewsItem2 {

    clouds: number;
    dew_point: number;
    dt: number;

    feels_like: {
      day: number;
      eve: number;
      morn: number;
      night: number;
    };
    humidity: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    pop: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      eve: number;
      max: number;
      min: number;
      morn: number;
      night: number;
    };
    uvi: number;
    weather:[ {
      description: string;
      icon: string;
      id: number;
      main: string;
    }];
    wind_deg: number
    wind_gust: number
    wind_speed: number

}

export interface INewsItem3 {

  temp: {
    day: number;
  };
  

}


export interface Weather {

  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {

}