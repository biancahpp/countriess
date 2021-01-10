export default function SearchBar(props:any) {
  return (
    <div className="SearchBar">
      <input 
      type="text" 
      placeholder="Search for a country..."
      onChange={e => props.onChange(e.target.value)
      }/>

      <select name="region" id="region-selector">
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
