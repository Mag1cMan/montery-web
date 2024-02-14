import React from 'react';
import { MMORPG_STATS } from '@/constants';
import { Typography } from '@material-tailwind/react';
import StatsCard from './statsCard';

interface StatsCardProps {
  count: number;
  title: string;
}

const PlayerStats: React.FC = () => {
  return (
    <div>
      <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
        <div>
          <Typography variant="h6" color="orange" className="mb-6 font-medium" placeholder={""}>
            Our Stats
          </Typography>
          <Typography
            className="text-5xl font-bold leading-tight lg:w-3/4"
            color="blue-gray"
            placeholder={""}
          >
            Monterya Highlights
          </Typography>
          <Typography
            variant="lead"
            className="mt-3 w-full !text-gray-500 lg:w-9/12"
            placeholder={""}
          >
            Embark on a thrilling three-day adventure, uniting the most skilled players,
            creative game developers, and renowned gaming guilds
            in the world of Massively Multiplayer Online Role-Playing Games (MMORPGs).
          </Typography>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 gap-x-28">
            {MMORPG_STATS.map((props: StatsCardProps, key: number) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerStats;
