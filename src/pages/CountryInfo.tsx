import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CountryInfo({originalDetails}:any) {
  const params:any = useParams();
  const [ details, setDetails ] = useState<any>(null);

  useEffect(() => {
    if (originalDetails) filterCountryName()
  }, 
  [originalDetails])

  function filterCountryName() {
    setDetails(originalDetails.filter((item:any) =>item.name === params.name ))
  }

  return (
    <div className="CountryInfo">
      {details && details[0] ? 
      <div>
        {details[0].name}
      </div> 
      : <div>Loading...</div>}
    </div>
  )
}
