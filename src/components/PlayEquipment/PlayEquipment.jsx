import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FacilityCard from '../FacilityCard/FacilityCard';
import './PlayEquipment.scss';

const PlayEquipment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const facilities = [
    {
      src: '/images/playequipment/1.webp',
      text: 'The only place in Srinagar to have a purpose built climbing wall for our Toddlers',
      label: 'Wall Climbing',
      alt: "Children's climbing wall facility",
    },
    {
      src: '/images/playequipment/2.webp',
      text: 'Selection of carefully chosen toys from United Kingdom to enhance key skills',
      label: 'Small World Toys',
      alt: 'Educational toys from UK',
    },
    {
      src: '/images/playequipment/3.webp',
      text: 'The only soft play area in Srinagar designed specifically keeping the young ones in mind',
      label: 'Soft Play Area',
      alt: 'Safe soft play area for children',
    },
    {
      src: '/images/playequipment/4.webp',
      text: 'Outdoor Splash Pool for children to break free during hot summer days.',
      label: 'Splash Pool',
      alt: "Children's outdoor splash pool",
    },
    {
      src: '/images/playequipment/5.webp',
      text: 'Specially designed outdoor play area with soft flooring for safety of children.',
      label: 'Outdoor Play Area',
      alt: 'Safe outdoor playground',
    },
    {
      src: '/images/playequipment/6.webp',
      text: 'There is a lot more to keep the kids entertained throughout the year.',
      label: 'And much more...',
      alt: 'Additional play facilities',
    },
  ];

  return (
    <div className="play-equipment-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Facilities include...</h1>
        <hr className="hr-play-equipment" />
      </motion.div>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <FacilityCard key={facility.label} {...facility} />
        ))}
      </div>
    </div>
  );
};

export default PlayEquipment;
