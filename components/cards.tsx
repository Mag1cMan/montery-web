// In Cards.tsx
import React from 'react';
import Image from 'next/image';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';

interface CardsProps {
  imsgesrc: string;
  title: string;
  subTitle: string;
  description: string;
}

const Cards: React.FC<CardsProps> = ({ imsgesrc, title, subTitle, description }) => {
  return (
    <Card shadow={false} placeholder={""}>
      <CardBody placeholder={""} className="h-[350px] p-5 flex flex-col justify-center items-center rounded-2xl bg-creamwhite border border-gray-800">
        <Image src={imsgesrc} alt="Description of the image" width={60} height={60} />
        <Typography variant="h6" className="mb-4 text-center" color="gray" placeholder={""}>
          {subTitle || ""}
        </Typography>
        <Typography variant="h4" className="text-center" color="gray" placeholder={""}>
          {title || ""}
        </Typography>
        <Typography
          color="gray"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          placeholder={""}
        >
          {description}
        </Typography>
        <a href="#_" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
          Read More
        </a>
      </CardBody>
    </Card>
  );
};

export default Cards;
