import logo from '../../assets/Logo.png';
import dot from '../../assets/Ellipse 1.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='fontAwesome'>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <img src={logo} alt='' />
      <div className='menuItems'>
        <p>All Menus</p>
        <p>Festive</p>
        <p>Autumn</p>
        <p>For Tomorrow</p>
        <p>Bestsellers</p>
        <p>This Weekend</p>
        <p>Gifting</p>
      </div>

      <div className='basket'>
        <p>Basket</p>
        <img src={dot} alt='' />
      </div>
    </div>
  );
};

export default Header;
