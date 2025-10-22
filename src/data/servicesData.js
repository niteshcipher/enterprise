// src/data/servicesData.js
import { FaBoxes, FaTools, FaWrench, FaCogs } from 'react-icons/fa';

// This is for the homepage
export const coreServices = [
  {
    id: 1,
    icon: FaBoxes,
    title: "Wide Range of Products",
    description: "Explore our selection of RO, UV, and UF purifiers from top brands.",
    link: "/products"
    
  },
  {
    id: 2,
    icon: FaTools,
    title: "Professional Installation",
    description: "Hassle-free setup and integration of your new water purification system.",
    link: "/services"
  },
  {
    id: 3,
    icon: FaWrench,
    title: "AMC & Maintenance",
    description: "Keep your system running smoothly with our Annual Maintenance Contracts.",
    link: "/services"
  },
  {
    id: 4,
    icon: FaCogs,
    title: "Expert Repair Services",
    description: "Quick and reliable repairs for all types of RO systems and local water issues.",
    link: "/services"
  },
];

// src/data/servicesData.js

export const detailedServices = [
  {
    id: 'installation',
    title: 'New RO System Installation',
    description: 'Our expert technicians ensure your new water purifier is installed correctly and efficiently for optimal performance from day one.',
    benefits: ['Proper setup according to brand guidelines', 'Water pressure and TDS checks', 'Demonstration of features and basic maintenance'],
    costEstimate: 'Starting from ₹350',
    image: '/assets/productimages/new.jpg', // <-- ADD THIS
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contracts (AMC)',
    description: 'Enjoy peace of mind with our comprehensive AMC plans. We take care of regular servicing, filter changes, and system check-ups.',
    benefits: ['Scheduled periodic maintenance visits', 'Free filter replacements (as per plan)', 'Priority service and breakdown support'],
    costEstimate: 'Plans starting at ₹1,499/year',
    image: '/assets/productimages/amc.jpg', // <-- ADD THIS
  },
  {
    id: 'repair',
    title: 'Repair & Servicing',
    description: 'Facing issues like low water flow, strange taste, or a system breakdown? Our team provides prompt and reliable repair services for all brands.',
    benefits: ['Quick diagnosis of the problem', 'Genuine spare parts and membranes', 'Service warranty on all repairs'],
    costEstimate: 'Inspection charges from ₹200',
    image: '/assets/productimages/inst.jpg', // <-- ADD THIS
  },
  {
    id: 'softener-installation',
    title: 'Water Softener Sales & Installation',
    description: 'Tired of hard water, scaling, and appliance damage? We sell and install high-quality water softeners perfect for your home.',
    benefits: ['Reduces scaling in pipes and appliances', 'Improves skin, hair, and laundry softness', 'Extends the life of RO membranes', 'Professional setup for optimal regeneration'],
    costEstimate: 'Call for Product & Installation Price',
    image: '/assets/productimages/softner.jpg', // <-- ADD THIS
  },
  {
    id: 'water-testing',
    title: 'Detailed Water Quality Testing',
    description: "Know exactly what's in your water. We provide detailed water testing to check for hardness, TDS, pH levels, and other contaminants.",
    benefits: ['Accurate report of your water quality', 'Identifies invisible contaminants (like heavy metals)', 'Expert advice on the perfect solution', 'On-site TDS and hardness checks'],
    costEstimate: 'Starting from ₹149',
    image: '/assets/productimages/testing.jpg', // <-- ADD THIS
  }
];