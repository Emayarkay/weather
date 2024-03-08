import PropTypes from 'prop-types';

function Location(props) {
  const weatherLocation = props.location

  const capitalize = (words) => {
    const caps = words.split(" ").map((word) => {
      return word[0].toUpperCase() +  word.slice(1)
    })
    return caps.join(" ")
  }

  return(
    <div className="location">
        {weatherLocation && capitalize(weatherLocation)}
    </div>
  )
}

Location.propTypes = {
  location: PropTypes.string,
}

export default Location
