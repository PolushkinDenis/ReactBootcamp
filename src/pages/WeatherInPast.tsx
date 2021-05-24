import * as React from 'react'

import { PastWeather } from '../components/PastWeather'
import '../pages/WeatherInPast.css';
import {EmptyWeather} from '../components/EmptyWeather'
const API_KEY = "833d126842633355dcaa4c641a86c646"



const WeatherInPast: React.FC = () => {

  const [news, setNews] = React.useState([])
  const [coord, setValue] = React.useState([])
  const [array, setArray] = React.useState([])
  const [dt, setDt] = React.useState(String)
  const [temp, setTemp] = React.useState(String)
  const [icon, setIcon] = React.useState([])

  const [changeDate, setChangeDate] = React.useState(Number)

  const [lat, setLat] = React.useState(Number)
  const [lon, setLon] = React.useState(Number)

  const [isAllOk, setIsAllOk] = React.useState(false)
  // const [changeDate, setChangeDate] = React.useState(1621382400)

  // const [lat, setLat] = React.useState(53.195873)
  // const [lon, setLon] = React.useState(50.100193)


  async function fetchUserToResult() {
    if (changeDate != 0 && lat != 0 && lon != 0) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${changeDate}&appid=${API_KEY}`);
      const json = await response.json();
      setNews(json.current)
      setDt(json.current.dt)
      setTemp(json.current.temp)
      setIcon(json.current.weather[0].icon)
      setIsAllOk(true)

    }
    else {
      return
    }
  }

  React.useEffect(() => {
    fetchUserToResult()
  }, [fetchUserToResult])


  const currDate = new Date().toLocaleDateString();

  const getDateString = () => {
    let dd: number | string = new Date().getDate();
    let mm: number | string = new Date().getMonth() + 1;
    const yyyy: number | string = new Date().getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return (yyyy + '-' + mm + '-' + dd).toString();
  }


  const getCoordinate = (event: any) => {
    var price = event.split(',');
    setLat(price[0])
    setLon(price[1])
  }




  // const cityHandler = (event: any) => {
  //   var price = event.split(',');
  //   var lat = price[0]
  //   var lon = price[1]
  //   fetchUserToResult();
  //   async function fetchUserToResult() {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts,hourly&appid=${API_KEY}&units={metric}`);
  //     // const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}`);
  //     const json = await response.json();
  //     setNews(json.daily)
  //   }
  // }

  const dateChanged = (event: any) => {
    const selectedDate = new Date(event.target.value).getTime();
    const daten = Math.round(selectedDate / 1000.0)
    setChangeDate(daten)
    // fetchUserToResult2()
  }


  // React.useEffect(() => {
  //   async function fetchUserToResult2() {
  //     if (changeDate != 0 && lat != 0 && lon != 0) {

  //       const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${changeDate}&appid=${API_KEY}`);
  //       const json = await response.json();

  //       console.log('22222')

  //       setNews(json.current)
  //       setDt(json.current.dt)
  //       setTemp(json.current.temp)
  //       setIcon(json.current.weather[0].icon)
  //       setIsAllOk(true)
  //     }
  //     else {
  //       return
  //     }
  //   }
  //   fetchUserToResult2()
  // }, [])

  return (
    <div className="weather_in_past">
      <div className="title">
        Forecast for a Date in the Past
      </div>
      <div className="inputs">
        <select className="weather_seven-day_select" value={coord} onChange={(event: any) => getCoordinate(event.target.value)}>
          <option selected>Select city</option>
          <option value="53.195873,50.100193">Samara</option>
          <option value="53.507836,49.420393">Tolyatti</option>
          <option value="51.533557,46.034257">Saratov</option>
          <option value="55.796127,49.106405">Kazan</option>
          <option value="45.035470,38.975313">Krasnodar</option>
        </select>
        <div className="inputs_date">
          <input className="input-date" type="date"
            min="2021-05-01"
            max={getDateString()}
            // onBlur={fetchUserToResult}
            onChange={dateChanged}
          >
          </input>
        </div>
      </div>
      <div>

        {console.log("=================")}
        {console.log(news)}
        {isAllOk ? <PastWeather dt={dt} temp={temp} icon={icon} /> : <EmptyWeather/>}
        {/* {<PastWeather  dt= {dt} temp ={temp} icon = {icon}/>} */}

      </div>
    </div>
  )
}

export { WeatherInPast }