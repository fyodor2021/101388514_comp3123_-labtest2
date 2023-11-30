import { useEffect } from 'react'
import HourList from './HourList'
export default function WeatherShowList({ results }){

    const chunks = [];
    const chunkSize = 8;
    for (let i = 0; i < results.length; i += chunkSize) {
      chunks.push(results.slice(i, i + chunkSize));
    }
    const renderedList = chunks.map((chunk) => {
        return <HourList hours={chunk}/>
    })
    console.log(chunks)
    return (
        <div>
            <div>
                <div>
                   {renderedList}
                </div>
            </div>
        </div>
    )
}