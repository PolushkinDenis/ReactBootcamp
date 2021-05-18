import * as React from 'react'

import { INewsItem2 } from '../models/news'

interface INewsItemProps {
  data: INewsItem2;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { temp, weather },
}) => {

  const celsius = (temp.day - 273.15).toFixed()

  return (
    <div>
      <div>
        {weather.map(item => (
          <div>
            <img src={`http://openweathermap.org/img/wn/${item.icon}.png`}></img>
            <div>
              {celsius}C
          </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export { NewsItem }