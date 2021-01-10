import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Landing({details}:any) {
  return (
    <div className="Landing">
      <Header />
      <SearchBar />
      {details ? details.map((item:any) => <div key={uuidv4()}>{item.name}</div>) : <div>Loading</div>}
      {console.log(details)}
    </div>
  )
}
