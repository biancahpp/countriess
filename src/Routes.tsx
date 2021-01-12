import Landing from './pages/Landing';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiDisplayInfo from './services/apiClient';
import CountryInfo from './pages/CountryInfo';

export default function Routes() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDetails(response);
    });
  }, []);
  
  return (
    <div className="Routes">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact> 
            <Landing originalDetails={details}/>
          </Route >
          <Route path="/:alpha3Code"> 
            <CountryInfo originalDetails={details}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}