import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';

export default function CountryInfo({originalDetails}:any) {
  const params:any = useParams();
  const [ details, setDetails ] = useState<any>(null);

  useEffect(() => {
    if (originalDetails) filterCountryName()
  }, 
  [originalDetails])

  function filterCountryName() {
    setDetails(originalDetails.filter((item:any) =>item.alpha3Code === params.alpha3Code ))
  }

  function filterBorder(params:any) {
    setDetails(originalDetails.filter((item:any) =>item.alpha3Code === params))
  }

  return (
    <div className="CountryInfo">
      <Header />
      <BackBtn />
      {details && details[0] ? 
      <div className="info-wrapper">
        <div>
          <img src={details[0].flag} alt="Flag"/>
        </div>
        <div>
          <div>{details[0].name}</div>
          <div>Native Name: {details[0].languages.nativeName}</div>
          <div>Population: {details[0].population}</div>
          <div>Region: {details[0].region}</div>
          <div>Sub Region: {details[0].subregion}</div>
          <div>Capital: {details[0].capital}</div>
          <div>Top Level Domain: {details[0].topLevelDomain}</div>
          <div>Currencies: {details[0].currencies.map((el:any) => <p key={uuidv4()}>{el.name}</p>)}
          </div>
          <div>Languages: {details[0].languages.map((el:any) => <p key={uuidv4()}>{el.name}</p>)}</div>
          <div>Border Countries: {details[0].borders.length ? details[0].borders.map((el:any) =>
          <Link to={`/${el}`}key={uuidv4()} onClick={() => filterBorder(el)}>
          {el}</Link>
          ):
          <p>None</p>} </div>
        </div>
        
        
      </div> 
      : <div>Loading...</div>}
    </div>
  )
}
