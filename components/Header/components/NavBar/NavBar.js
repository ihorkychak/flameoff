import Button from '@/components/Button/Button';
import Navlist from '@/components/NavList/Navlist';
import FlameOffLogo from '@/components/FlameOffLogo/FlameOffLogo';
import navlist from '@/constants/navlist';
import Image from 'next/image';
import MobMenu from '@/public/images/icons/burger_menu.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <FlameOffLogo classNm="navbar__logo" />
      <div className="navbar__links">
        <Navlist listData={navlist} classNm="navbar__links_list" />
        <Button text="Order now" />
      </div>
      <Image
        className="navbar__menu"
        src={MobMenu}
        alt="navigation menu"
      />
    </nav>
  );
};

export default NavBar;
