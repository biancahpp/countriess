import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Landing({originalDetails}:any) {

  const [ currentFilter, setCurrentFilter ] = useState<any>(originalDetails);

  useEffect(() => setCurrentFilter(originalDetails), [originalDetails])

  console.log(currentFilter);

  function filterCountryName(filter:string) {
    setCurrentFilter(originalDetails.filter((obj:any) => obj.name.toLowerCase().includes(filter)))
  }
  
  return (
    <div className="Landing">
      <Header />
      <SearchBar onChange={(value:string) => {
      filterCountryName(value)
      }}/>
      <CountryList filteredDetails={currentFilter} />
    </div>
  )
}
