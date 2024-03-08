import PropTypes from "prop-types"

function Details(props) {
  const temp = props.weather.temp
  const location = props.location

  return(
    <div className="temp">
      { (location && temp) && <span>{temp.toFixed()}°C</span> }
    </div>
  )
}

Details.propTypes = {
  weather: PropTypes.shape({
    temp: PropTypes.number,
  }),
  location: PropTypes.string
}

export default Details
