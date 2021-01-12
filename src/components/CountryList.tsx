import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export default function CountryList({filteredDetails}:any) {
  return (
    <div>
      <div className="dashboard">
        {filteredDetails ? filteredDetails.map((item:any) => 
        <div className="card-wrapper" key={uuidv4()}>
          <Link to={`/${item.alpha3Code}`}>
            <div className="country-card">
              <div className="flag-wrapper">
                <img src={item.flag}></img>
              </div>
              <div className="text-wrapper">
                <h1>{item.name}</h1>
                <span>
                  <h4>Population:</h4> 
                  {item.population}
                </span>
                <span>
                  <h4>Region:</h4> 
                  {item.region}
                </span>
                <span>
                  <h4>Capital:</h4> 
                  {item.capital}
                </span>
              </div>
            </div> 
          </Link>
        </div>) : <div>Loading</div>}
      </div>
    </div>
  )
}
