import Link from 'next/link';
import Image from 'next/image';
import FlameOffLogo from '../FlameOffLogo/FlameOffLogo';
import Navlist from '../NavList/Navlist';
import navlist from '@/constants/navlist';
import SocialMedia from './components/SocialMedia/SocialMedia';
import termsData from '@/constants/termsData';
import GooglePlay from '@/public/images/googleplay.svg';
import Subscribe from './components/Subscribe/Subscribe';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <section className="footer__top">
      <FlameOffLogo classNm="footer__top_logo" />
      <p className="footer__top_text">
        Achieve a proper fire rating with an easy-to-apply, cost
        effective and environmentally friendly FlameOFF fire barrier
        paint.
      </p>
    </section>
    <section className="footer__bottom">
      <div className="footer__bottom_content foot-cont">
        <nav className="foot-cont__navbar">
          <FlameOffLogo classNm="foot-cont__navbar_logo" />
          <Navlist
            classNm="foot-cont__navbar_list"
            listData={navlist}
          />
          <SocialMedia />
        </nav>

        <Link
          className="foot-cont__email"
          href="mailto:info@flameoffcoatings.com"
          target="_blank"
        >
          info@flameoffcoatings.com
        </Link>

        <div className="foot-cont__features">
          <div className="foot-cont__features_subscribe">
            <p>
              Get our latest news, product updates and special offers!
            </p>
            <Subscribe />
          </div>
          <div className="foot-cont__features_app app-link">
            <p className="app-link__text">FLAMEOFF ESTIMATOR</p>
            <Link href="#">
              <Image src={GooglePlay} alt="google play icon" />
            </Link>
          </div>
        </div>

        <div className="foot-cont__terms">
          <div className="foot-cont__terms_links">
            {termsData.map(data => (
              <Link
                className="foot-cont__terms_links-link"
                key={data.link}
                href={data.link}
              >
                {data.text}
              </Link>
            ))}
          </div>
          <p className="foot-cont__terms_copyright">
            Copyright © 2023 Flame OFF | All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
