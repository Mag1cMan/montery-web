import { showCountItem } from '@/constants';
import React from 'react'
import CountUp from 'react-countup';


interface CardProps {
    imsgesrc: string;
    duration: number;
    number: number;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ imsgesrc, duration, number, description }) => (
    <div className="rounded h-32 p-4 flex items-center">
      <div className="mx-auto flex flex-col items-center px-4 py-10 text-white text-2xl">
        <img src={imsgesrc} alt="Item Logo" className="mb-4 w-15 h-15" />

        <p className="mb-2">{description}</p>
                <CountUp end={number} />

        
      </div>
    </div>
  );

const Itemstats = () => {
    const containerStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/rabbit_nobg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%', // Adjust the vertical position here
        opacity: 0.90, // Set the background image opacity
    };
    
    return (
        <div className="container mx-auto max-w-full bg-gray-200 bg-opacity-30 p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8" style={containerStyle}>
        {showCountItem.map((item, index) => (
          <Card
            key={index}
            imsgesrc={item.imsgesrc}
            duration={item.duration}
            number={item.number}
            description={item.description}
          />
          
        ))}
    
      </div>
    )
}


export default Itemstats
