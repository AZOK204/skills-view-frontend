import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'




const Logo = () => {
  return (
    <Link to="/dashboard">
    <div className=" w-full top-0 left-0 m-3">
      <img src={logo} alt="logo"  className='w-28' />
      </div>
    </Link>
  );
};

export default Logo;
