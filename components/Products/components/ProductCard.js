import Image from 'next/image';
import Button from '@/components/Button/Button';

import './ProductCard.scss';

const ProductCard = ({
  header,
  imageSrc,
  descrTextPrime,
  descrTextSec,
  imgAltText,
  rtl,
  itemId,
}) => {
  return (
    <div id={itemId} className={`product-card ${rtl && 'rtl'}`}>
      <div className="product-card__details">
        <h3 className="product-card__details_header">{header}</h3>
        <p className="product-card__details_prim-text">
          {descrTextPrime}
        </p>
        <p className="product-card__details_sec-text">
          {descrTextSec}
        </p>
        <Button
          text="Read More"
          classNm="product-card__details_button"
        />
      </div>
      <Image
        className="product-card__image"
        src={imageSrc}
        alt={imgAltText}
      />
      <Button
        text="Read More"
        classNm="product-card__details_button-mob"
      />
    </div>
  );
};

export default ProductCard;
