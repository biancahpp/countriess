import { FiSearch } from 'react-icons/fi';

export default function SearchBar(props:any) {
  return (
    <div className="SearchBar">
      <input 
      type="text" 
      placeholder="Search for a country..."
      onChange={e => props.handleInput(e.target.value)}
      name="inputText"/>

      <FiSearch className="search-icon"/>

      <select name="region" id="region-selector" onChange={(e) => props.handleSelect(e.target.value)}>
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
