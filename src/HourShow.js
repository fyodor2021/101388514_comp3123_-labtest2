export default function Hour({hour}){
    const day = new Date(hour.dt * 1000)
    console.log(hour.weather.main)
    return <div className="hourshow-container">
        <div>{hour.weather[0].main}</div>

        <img className='weather-icon' src={'https://openweathermap.org/img/wn/' + hour.weather[0].icon + '@2x.png'}></img>

        <div>{day.toUTCString()}</div>
    </div>
}
