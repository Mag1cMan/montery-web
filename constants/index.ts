// use for mapping loop files and ref it from here

// Navigation
export const NAV_LINKS = [
    {href: 'http://localhost:3000/', key: 'home' , lable: 'Home'},
    {href: '/details', key: 'gameWiki' , lable: 'Our Wiki'},
    {href: './page/index', key: 'mileStones' , lable: 'MileStone'},
    {href: 'http://localhost:3000/', key: 'contact_us' , lable: 'Contact Us'},
  ];

export const MAIN_INFO = [
    {
      imsgesrc :'/pickaxe_.png',
      title: "Progression",
      description: "Progress through our progression system and rewards",
      subTitle: "Sometext",
    },
    {
      imsgesrc :'/corn_.png',
      title: "Farming",
      description: "Farm and explore different worlds that we have to offer.",
      subTitle: "Sometext",

    },
    {
      imsgesrc :'/cheese_.png',
      title: "Trading",
      description: "Create a community and trade each other's needed items to build a stable economy",
      subTitle: "Sometext",

    }
  ];

 export const showCountItem =[
    {
      imsgesrc :'/pickaxe_.png',
      duration: 1.8,
      number: 5191,
      description: "Iron Mined",
    },
    {
      imsgesrc :'/thunder_icon.png',
      duration: 1.8,
      number: 3158,
      description: "Energy Used",
    },
    {
      imsgesrc :'/corn_.png',
      duration: 1.8,
      number: 16984,
      description: "Corn Harvested",
    },
    {
      imsgesrc :'/cheese_.png',
      duration: 1.8,
      number: 6161,
      description: "Cheese Eaten",
    },
  ]

  export const MMORPG_STATS = [
    {
      count: 10000,
      title: "Players",
    },
    {
      count: 1200,
      title: "Online",
    },
    {
      count: 50,
      title: "Quests",
    },
    {
      count: 7,
      title: "Continents",
    },
  ];

  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Monterya',
        'Guids',
        'Community',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Trading', 'Earning', 'Fun'],
    },
  ];

  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'monteryaofficial@gmail.com' },
    ],
  };

  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/discord.svg',
    ],
  };