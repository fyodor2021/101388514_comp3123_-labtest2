import { useEffect, useState} from "react"
import api from './api'
import './App.css'
import WeatherShowList from "./WeatherShowList"

export default function App() {
    const [value, setValue] = useState()
    const [searchVisible, setSearchVisible] = useState(true)
    const [results, setResults] = useState()
    const handleSubmit = async (event) => {
        event.preventDefault();
        setResults(await api(value));

    }
    console.log(results)
    const handleInputChange = (event) => {
        setValue(event.target.value)
    }
    return <div className="container">
        <div className="background"></div>
        <div className="input-component-container">
            <div>
                <form onSubmit={handleSubmit}>
                    <input className='input' value={value} onChange={handleInputChange} placeholder="Enter a City" />
                </form>
                {results ? 
                <div>
                    <WeatherShowList results={results}></WeatherShowList>
                </div> : <div></div>}
            </div>
        </div>
    </div>
}