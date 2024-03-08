function Search(props) {

  return(

    <div className="search">
      <input
        type="text"
        placeholder="location"
        id="location-input"
        onKeyUp={ props.handleChange }
      />
    </div>

  )

}

export default Search
