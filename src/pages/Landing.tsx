import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Landing({originalDetails}:any) {

  const [ currentFilter, setCurrentFilter ] = useState<any>(originalDetails);

  useEffect(() => setCurrentFilter(originalDetails), [originalDetails])

  function filterCountryName(filter:string) {
    setCurrentFilter(originalDetails.filter((obj:any) => obj.name.toLowerCase().includes(filter)))
  }

  function filterCountryRegion(region:string) {
    region === "All" ? setCurrentFilter(originalDetails) :
    setCurrentFilter(originalDetails.filter((obj:any) => obj.region === region))
  }
  
  return (
    <div className="Landing">
      <Header />
      <SearchBar 
        handleInput={(value:string) => {
          filterCountryName(value.toLowerCase())
        }}
        handleSelect={(value:string) => {
          filterCountryRegion(value)
        }}
      />
      <CountryList filteredDetails={currentFilter} />
    </div>
  )
}
