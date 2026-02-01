import React from 'react';
import { Leaf, Droplets, Snowflake, Trees, Shovel, Scissors } from 'lucide-react';
import { Service, Review, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Lawn Care & Maintenance',
    description: 'Precision mowing, edging, and fertilization to keep your lawn thick, green, and weed-free all season.',
    icon: <Scissors className="w-6 h-6" />,
    imageUrl: 'https://pristinelandscapingandlighting.com/wp-content/uploads/2024/08/Defining-Lawn-Care.jpg'
  },
  {
    id: '2',
    title: 'Landscape Design',
    description: 'Transform your outdoor space with custom garden layouts, stone paths, and architectural planting.',
    icon: <Trees className="w-6 h-6" />,
    imageUrl: 'https://rmpslandscaping.com/wp-content/uploads/2022/02/front-yard-modern-home-landscape-design.jpg'
  },
  {
    id: '3',
    title: 'Garden Restoration',
    description: 'Breathe life back into overgrown or neglected gardens with professional pruning and soil enrichment.',
    icon: <Leaf className="w-6 h-6" />,
    imageUrl: 'https://farm4.staticflickr.com/3753/10010598485_d54e903bf4_z.jpg'
  },
  {
    id: '4',
    title: 'Irrigation Systems',
    description: 'Smart watering solutions that conserve water while ensuring your landscape thrives in any weather.',
    icon: <Droplets className="w-6 h-6" />,
    imageUrl: 'https://www.twl-irrigation.com/wp-content/uploads/2023/06/Sprinklers.jpg'
  },
  {
    id: '5',
    title: 'Hardscaping',
    description: 'Patios, retaining walls, and walkways built with high-quality stone to add structure and value.',
    icon: <Shovel className="w-6 h-6" />,
    imageUrl: 'https://www.hightechlandscapes.com/wp-content/uploads/2023/03/hardscaping.jpg'
  },
  {
    id: '6',
    title: 'Snow Removal',
    description: 'Reliable winter service keeping your driveways and walkways clear and safe for your family.',
    icon: <Snowflake className="w-6 h-6" />,
    imageUrl: 'https://victorylawn.com/wp-content/uploads/2021/10/Residential-Snow-Removal-Service-2048x1365-1.webp'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Ms. Campbell',
    content: "The Best Grass team is absolutely top-notch. They turned my wild backyard into a peaceful sanctuary. Above and beyond every time!",
    rating: 5
  },
  {
    id: 'r2',
    author: 'Charles Phillips',
    content: "Reliable and professional. Best Grass handles our commercial property and the attention to detail is phenomenal. Highly recommended.",
    rating: 5
  },
  {
    id: 'r3',
    author: 'Mademoiselle Chantelle Amour',
    content: "The best landscaping work I've ever seen. They are respectful of the property and incredibly detail-oriented. My lawn looks like a golf course!",
    rating: 5
  },
  {
    id: 'r4',
    author: 'Vonterro White',
    content: "Phenomenal work on our garden restoration. They took a space that was a mess and made it beautiful. Very professional service.",
    rating: 5
  },
  {
    id: 'r5',
    author: 'Reneese Clay',
    content: "Very impressed with the consistency. They show up when they say they will and do an amazing job. True professionals in their field.",
    rating: 5
  }
];

export const PROJECTS: Project[] = [
  { 
    id: 'p1', 
    title: 'The Evergreen Estate', 
    category: 'Landscape Design', 
    imageUrl: 'https://d13cw1lxlociqy.cloudfront.net/9en9sunxykgxhp4uqkniiw42xtwp' 
  },
  { 
    id: 'p2', 
    title: 'Stone Terrace Retreat', 
    category: 'Hardscaping', 
    imageUrl: 'https://abladeofgrass.com/wp-content/uploads/wooded-wellesley-terraces-stone-patio-steps.jpg' 
  },
  { 
    id: 'p3', 
    title: 'Modern Zen Garden', 
    category: 'Garden Restoration', 
    imageUrl: 'https://modernzengarden.com/wp-content/uploads/2023/03/HP-slider-24-japanesegarden-Y.jpg' 
  },
  { 
    id: 'p4', 
    title: 'Lakeside Lawn', 
    category: 'Lawn Care', 
    imageUrl: 'https://lakehomes.com/info/wp-content/uploads/2021/07/JeffSinonPhotographyViaSwensonGranite-1024x682.jpg' 
  },
  { 
    id: 'p5', 
    title: 'Cottage Garden', 
    category: 'Landscape Design', 
    imageUrl: 'https://www.bhg.com/thmb/-hL-MHW48WbvAUwtIpTkHk9m75U=/550x0/filters:no_upscale():strip_icc()/101779123-15e05d8409a9462790a5494815d4c957.jpg' 
  },
  { 
    id: 'p6', 
    title: 'Heritage Walkway', 
    category: 'Hardscaping', 
    imageUrl: 'https://pristinelandscapingandlighting.com/wp-content/uploads/2024/03/Heritage-Landscaping-900x450.jpg' 
  }
];