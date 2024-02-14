import { Typography } from '@material-tailwind/react';
import React from 'react';
import Cards from './cards';
import { MAIN_INFO } from "@/constants";



const Features = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h3" className="text-center mb-2" color="orange" placeholder={""}>
        Key features
      </Typography>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {MAIN_INFO.map((props, idx) => (
          <Cards
            key={idx}
            imsgesrc={props.imsgesrc}
            title={props.title}
            subTitle={props.subTitle}
            description={props.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
