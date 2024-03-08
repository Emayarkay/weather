import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import Search from "./components/Search"
import Location from "./components/Location"
import Image from "./components/Image"
import Details from './components/Details'

function App() {
  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState({ temp: 0, weather: "" })

  const apiKey = `762755394ee94084232751287e39b5b9`
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&&units=metric&APPID=${apiKey}`

  const handleChange = (event) => {
    if (event.key==="Enter") {
      const searchedLocation = document.getElementById("location-input").value
      setLocation(searchedLocation)
    }
  }

  useEffect(() => {
    location != "" && getWeather()
    document.getElementById("location-input").value = ""
  }, [location])

  const getWeather = () => {
    axios.get(url)
    .then(res => {
      setWeather({
        temp: res.data.main.temp,
        weather: res.data.weather[0].main
      })
    })
    .catch(err => {
      setLocation(`location ${err.response.statusText.toLowerCase()}`)
      setWeather({ temp: ""})
      console.log(typeof location)
    })
  }

  const tempColour = (temp) => {
    if(temp >= 50) {
      return "#black"
    }else if(temp < 49 && temp >= 45) {
      return "#1e000e"
    }else if(temp < 45 && temp >= 40) {
      return "#571616"
    }else if(temp < 40 && temp >= 35) {
      return "#8c001a"
    }else if(temp < 35 && temp >= 30) {
      return "#e71d36"
    }else if(temp < 30 && temp >= 27) {
      return "#fe6847"
    }else if(temp < 27 && temp >= 24) {
      return "#f46036"
    }else if(temp < 24 && temp >= 22) {
      return "#f5983b"
    }else if(temp < 22 && temp >= 20) {
      return "#f4b860"
    }else if(temp < 20 && temp >= 18) {
      return "#ffc857"
    }else if(temp < 18 && temp >= 16) {
      return "#ffd972"
    }else if(temp < 16 && temp >= 14) {
      return "#fcdd8d"
    }else if(temp < 14 && temp >= 12) {
      return "#f7e8a4"
    }else if(temp < 12 && temp >= 10) {
      return "#f7ecab"
    }else if(temp < 10 && temp >= 8) {
      return "#e2f5ab"
    }else if(temp < 8 && temp >= 6) {
      return "#def7b2"
    }else if(temp < 6 && temp >= 4) {
      return "#b5d6b2"
    }else if(temp < 4 && temp >= 2) {
      return "#a8ffdf"
    }else if(temp < 2 && temp >= 0) {
      return "#a8fff1"
    }else if(temp < 0 && temp >= -2) {
      return "#8cd9db"
    }else if(temp < -2 && temp >= -4) {
      return "#9ce2f7"
    }else if(temp < -4 && temp >= -6) {
      return "#78bbff"
    }else if(temp < -8 && temp >= -10) {
      return "#549be3"
    }else if(temp < -10 && temp >= -15) {
      return "#283c9c"
    }else if(temp < -15 && temp >= -20) {
      return "#192561"
    }else if(temp < -20 && temp >= -30) {
      return "#131b47"
    }else if(temp < -30 && temp >= -40) {
      return "#1a1423"
    }else {
      return "black"
    }
  }

  const styles = {
      border: `1rem solid ${ location != "" && location != "location not found" ? tempColour(weather.temp) : "black" }`
    }

  return(

    <div className="wrapper" style={ weather && styles }>
      <Search
        handleChange={ handleChange }
        getWeather={ getWeather }
      />

      <Location
        location={ location }
      />
      <Image
        weather={ weather }
        location={ location }
      />
      <Details
        weather={ weather }
        location={ location }
      />
    </div>

  )
}

export default App
