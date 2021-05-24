import * as React from 'react'
import './PastWeather.css'

import { IPastWeather } from '../models/news'
import { IPast } from '../models/news'


function PastWeather(temp: any) {
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
    getDate(temp.dt)
  }, [])
  const celsius  = (temp.temp - 273.15).toFixed()


  return (
    <div className="past_weather_form">
      <div>
      {date}
      </div>
      <div>
      <img src={`http://openweathermap.org/img/wn/${temp.icon}.png`}></img>
      </div>
      <div>
      {!!celsius ? (((Number.parseInt(celsius)) > 0 ? '+': '') + celsius + '°'): ''}
      </div>

    </div >
  )
}


export { PastWeather }


// const PastWeather: React.FC<{data:any}> = (temp: any) => {
//   const [date , setDate] = React.useState(String)

  
//   const getDate = (dt:number) =>{
//     const a = new Date(dt * 1000);
//     const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
//     const year = a.getFullYear();
//     const month = months[a.getMonth()];
//     const date = a.getDate();
//     const time = date + ' ' + month + ' ' + year;
//     setDate(time)
//   }
  
//   React.useEffect(() => {
//     getDate(temp.dt)
//   }, [])
//   const celsius  = (temp.temp - 273.15).toFixed()


//   return (
//     <div className="past_weather_form">
//       <div>
//       {date}
//       </div>
//       <div>
//       {/* <img src={`http://openweathermap.org/img/wn/${temp.icon}.png`}></img> */}
//       </div>
//       <div>
//       {!!celsius ? (((Number.parseInt(celsius)) > 0 ? '+': '') + celsius + '°'): ''}
//       </div>

//     </div >
//   )
// }

// export { PastWeather }