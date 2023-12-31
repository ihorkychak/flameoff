import Image from 'next/image';
import industriesData from '@/constants/IndustriesData';
import SectionHeading from '../SectionHeading/SectionHeading';
import { industriesDet } from '@/constants/sectionHeadingDetails';

import './Industries.scss';

const Industries = () => {
  return (
    <section className="industries">
      <SectionHeading headerTxt={industriesDet.headerTxt} />
      <div className="industries__images">
        {industriesData.map(data => (

            <Image
            key={data.altTxt}
              className="industries__images_image"
              src={data.image}
              alt={data.altTxt}
            />
        ))}
      </div>
    </section>
  );
};

export default Industries;
