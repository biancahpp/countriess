export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search for a country..."/>

      <select name="region" id="region-selector">
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
