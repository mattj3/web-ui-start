import './App.css'
import Alert from './components/Weather/Alerts'
import Forecast from './components/Weather/Forecast'

function App() {
  return (
    <>
      <div>
        <h1>Alerts TX</h1>
        <Alert />
      </div>
      <div>
        <h1>Weather Forecast</h1>
        <Forecast />
      </div>
    </>
  )
}

export default App