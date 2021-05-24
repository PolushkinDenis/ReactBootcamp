import * as React from 'react'
import './WeatherSevenDay.css'
import logo from '../images/Academy-Weather-bg160.png'
import './EmptyWeather.css'
const EmptyWeather: React.FC = () => {

    return (
        <div className="empty_weather">
            <div className="empty_weather_img">
                <img src={logo}></img>
            </div>
            <div className="empty_weather_p">
                <p>Fill in all the fields and the weather will be displayed</p>
            </div>

        </div >
    )
}

export { EmptyWeather }