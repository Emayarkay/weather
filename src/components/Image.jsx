import PropTypes from 'prop-types';

function Image(props) {
  const weather = props.weather.weather
  const location = props.location

  console.log(location)

  const icon = (weather) => {
    if(weather === "Clear") {
      return "01d.png"
    }else if(weather === "Thunderstorm") {
      return "11d.png"
    }else if(weather === "Drizzle") {
      return "09d.png"
    }else if(weather === "Rain") {
      return "09d.png"
    }else if(weather === "Snow") {
      return "13d.png"
    }else if(weather === "Clouds") {
      return "02d.png"
    }else if(weather === "Mist" ||
              weather === "Smoke" ||
              weather === "Haze" ||
              weather === "Dust" ||
              weather === "Sand" ||
              weather === "Fog" ||
              weather === "Ash" ||
              weather === "Squall" ||
              weather === "Tornado") {
      return "50d.png"
    }else {
      return ""
    }
  }

  const globeStyles = {
    width: "300px",
    height: "300px"
  }

  return(
    <div className="weather-image">
      { location != "" ?
        (location != "location not found" ?
          <img src={`../../public/${icon(weather)}`} alt="weather" /> :
          <img src={"../../public/globe.png"} alt="globe" style={ globeStyles } /> ) :
        <img src={"../../public/globe.png"} alt="globe" style={ globeStyles } />
      }
    </div>
  )
}

Image.propTypes = {
  weather: PropTypes.shape({
    weather: PropTypes.string,
  }),
  location: PropTypes.string,
};

export default Image
