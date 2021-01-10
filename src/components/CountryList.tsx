import { v4 as uuidv4 } from 'uuid';

export default function CountryList({filteredDetails}:any) {
  return (
    <div>
      <div className="dashboard">
        {filteredDetails ? filteredDetails.map((item:any) => 
        <div className="card-wrapper" key={uuidv4()}>
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
        </div>) : <div>Loading</div>}
      </div>
    </div>
  )
}
