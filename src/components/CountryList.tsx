import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export default function CountryList({filteredDetails}:any) {
  return (
    <div className="CountryList">
      <div className="dashboard">
        {filteredDetails ? filteredDetails.map((item:any) => 
        <div className="card-wrapper" key={uuidv4()}>
          <Link to={`/${item.alpha3Code}`} className="country-link">
            <div className="country-card">
              <div className="flag-wrapper">
                <img src={item.flag}></img>
              </div>
              <div className="text-wrapper">
                <h1>{item.name}</h1>
                <div className="country-info-wrapper">
                  <h4>Population:</h4> 
                  <span>{item.population.toLocaleString('de-DE')}</span>
                </div>
                <div className="country-info-wrapper">
                  <h4>Region:</h4> 
                  <span>{item.region}</span>
                </div>
                <div
                className="country-info-wrapper">
                  <h4>Capital:</h4>
                  <span>{item.capital}</span>
                </div>
              </div>
            </div> 
          </Link>
        </div>) : <div>Loading</div>}
      </div>
    </div>
  )
}
