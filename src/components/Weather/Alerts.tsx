import React, { useState } from "react"

const Alert = () => {
    const [info, setInfo] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        const zone = 'https://api.weather.gov/alerts/active?area=TX'
        const res = await fetch(zone)
        const data = await res.json()
        setInfo(data.features)
        setIsLoading(false)
    }

    return (
        <div>
            <p>TXZ211</p>
            {isLoading && <p>Loading...</p>}
            <ul>
                {info.map(item => {
                    return <pre key={item.id}>{item.properties.headline}</pre>
                    // return <pre key={item.name}><b>{item.name}</b> {item.detailedForecast}</pre>
                })}
            </ul>
            <button onClick={getData}>Get Data</button>
        </div>
    )
}

export default Alert;