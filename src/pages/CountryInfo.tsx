import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";

export default function CountryInfo({ originalDetails }: any) {
  const params: any = useParams();
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    if (originalDetails) filterCountryName();
  }, [originalDetails]);

  function filterCountryName() {
    setDetails(
      originalDetails.filter(
        (item: any) => item.alpha3Code === params.alpha3Code
      )
    );
  }

  function filterBorder(params: any) {
    setDetails(
      originalDetails.filter((item: any) => item.alpha3Code === params)
    );
  }

  return (
    <div className="CountryInfo">
      <Header />
      <BackBtn />
      {details && details[0] ? (
        <div className="info-wrapper">
          <div className="img-wrapper">
            <img src={details[0].flag} alt="Flag" />
          </div>
          <div className="country-data">
            <h1>{details[0].name}</h1>
            <div className="country-data-wrapper">
              <div>
            <div>
              Native Name: <span>{details[0].nativeName}</span>
            </div>
            <div>
              Population: <span>{details[0].population.toLocaleString('de-DE')}</span>
            </div>
            <div>
              Region: <span>{details[0].region}</span>
            </div>
            <div>
              Sub Region: <span>{details[0].subregion}</span>
            </div>
            <div>
              Capital: <span>{details[0].capital}</span>
            </div>
            </div>
            <div>
            <div>
              Top Level Domain: <span>{details[0].topLevelDomain}</span>
            </div>
            <div>
              Currencies:{" "}
              <span>
                {details[0].currencies.map((el: any) => (
                  <p key={uuidv4()}>{el.name}</p>
                ))}
              </span>
            </div>
            <div>
              Languages:{" "}
              <span>
                {details[0].languages.map((el: any) => (
                  <p key={uuidv4()}>{el.name}</p>
                ))}
              </span>
            </div>
            </div>
            </div>
            
            <div>
              <h3>Border Countries:</h3>{" "}
              <div className="border-link-wrapper" >
              {details[0].borders.length ? (
                details[0].borders.map((el: any) => (
                    <Link
                    to={`/${el}`}
                    onClick={() => filterBorder(el)}
                    className="border-btn"
                    key={uuidv4()}
                  >
                    {el}
                  </Link>
                ))
              ) : (
                <p>None</p>
              )}</div>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
