import React, { useState } from "react"

const Forecast = () => {
  const [info, setInfo] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    const zone = 'https://api.weather.gov/zones/forecast/TXZ211/forecast'
    const res = await fetch(zone)
    const data = await res.json()
    setInfo(data.properties.periods)
    setIsLoading(false)
  }

  return (
    <div>
      <p>TXZ211</p>
      {isLoading && <p>Loading...</p>}
      <ul>
        {info.map(item => {
          return <pre key={item.name}><b>{item.name}</b> {item.detailedForecast}</pre>
        })}
      </ul>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default Forecast;