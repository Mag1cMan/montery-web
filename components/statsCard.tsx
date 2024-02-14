import React from 'react';
import { Typography, Card } from '@material-tailwind/react';
import CountUp from 'react-countup';

interface StatsCardProps {
  count: number;
  title: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ count, title }: StatsCardProps) => {
  return (
    <Card color="transparent" shadow={false} placeholder={""}>
      <Typography variant="h1" className="font-bold" color="blue-gray" placeholder={""}>
      <CountUp end={count} />
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mt-1 font-medium" placeholder={""}>
        {title}
      </Typography>
    </Card>
  );
};

export default StatsCard;
