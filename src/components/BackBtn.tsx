import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function BackBtn() {
  return (
    <div className="BackBtn">
      <Link to="/">
       <FiArrowLeft className="back-btn-icon"/>
      </Link>
    </div>
  )
}
