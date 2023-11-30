import HourShow from './HourShow'
export default function day({hours}){
    const renderedHours = hours.map(hour => {
        return <HourShow hour={hour} key={hour.dt}/>
    })
    return <div >
        <div className='hours-container'>{renderedHours}</div>
    </div>
}