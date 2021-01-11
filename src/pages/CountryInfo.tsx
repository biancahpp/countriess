import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CountryInfo({originalDetails}:any) {
  console.log(originalDetails)
  const params:any = useParams();
  const [ details, setDetails ] = useState<any>(null);

  useEffect(() => {
    if (originalDetails) filterCountryName()
  }, 
  [originalDetails])
  console.log(params.name)

  function filterCountryName() {
    setDetails(originalDetails.filter((item:any) =>item.name === params.name ))
    console.log(details)
  }

  return (
    <div className="CountryInfo">
      OI
      {details && <div>{details.name}</div>}
    </div>
  )
}
