import * as React from 'react'
import './WeatherSevenDay.css'
import { INewsItem2 } from '../models/news'
import { strict } from 'assert'

interface INewsItemProps {
  data: INewsItem2;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { dt, temp, weather },
}) => {

const [date , setDate] = React.useState(String)

  const getDate = (dt:number) =>{
    const a = new Date(dt * 1000);
    const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = date + ' ' + month + ' ' + year;
    setDate(time)
  }

  React.useEffect(() => {
    getDate(dt)
  }, [])

  const celsius  = (temp.day - 273.15).toFixed()

  return (
    <div className="weather_form">
      <div>
        {date}
      </div>
      <div>
        {weather.map(item => (
          <div>
            <img src={`http://openweathermap.org/img/wn/${item.icon}.png`}></img>
            <div>
              {!!celsius ? (((Number.parseInt(celsius)) > 0 ? '+': '') + celsius + '°'): ''}
          </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export { NewsItem }