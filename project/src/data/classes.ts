import { format, addDays } from 'date-fns';

export type ClassSession = {
  id: string;
  date: string;
  time: string;
  availableSpots: number;
  totalSpots: number;
};

export type WorkshopClass = {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  shortDescription: string;
  category: 'beginner' | 'intermediate' | 'advanced' | 'workshop';
  image: string;
  instructor: string;
  featured: boolean;
  materials: string[];
  upcoming: ClassSession[];
};

// Helper function to generate upcoming dates starting from today
const generateUpcomingSessions = (count: number, spotsPerSession = 8): ClassSession[] => {
  const sessions: ClassSession[] = [];
  const startDate = new Date();

  for (let i = 0; i < count; i++) {
    const date = addDays(startDate, i * 3 + 1); // Every 3 days
    const id = `session-${format(date, 'yyyyMMdd')}`;
    const formattedDate = format(date, 'yyyy-MM-dd');

    // Morning session
    sessions.push({
      id: `${id}-am`,
      date: formattedDate,
      time: '10:00 AM - 1:00 PM',
      availableSpots: Math.floor(Math.random() * (spotsPerSession + 1)),
      totalSpots: spotsPerSession
    });

    // Afternoon session
    sessions.push({
      id: `${id}-pm`,
      date: formattedDate,
      time: '3:00 PM - 6:00 PM',
      availableSpots: Math.floor(Math.random() * (spotsPerSession + 1)),
      totalSpots: spotsPerSession
    });
  }

  return sessions;
};

export const classes: WorkshopClass[] = [
  {
    id: "c1",
    name: "Introduction to Pottery",
    price: 75,
    duration: "3 hours",
    shortDescription: "Learn the basics of pottery in this hands-on beginner class.",
    description: "Our Introduction to Pottery class is perfect for beginners who want to get their hands dirty and learn the fundamentals of working with clay. In this 3-hour workshop, you'll learn basic hand-building techniques including pinch pots, coil building, and slab construction. By the end of the class, you'll have created your very own small pottery piece that we'll fire and glaze for you to pick up later. All materials are provided, and no prior experience is necessary.",
    category: "beginner",
    image: "https://images.pexels.com/photos/3094364/pexels-photo-3094364.jpeg",
    instructor: "Emma Watson",
    featured: true,
    materials: ["Clay", "Basic tools", "Apron", "Firing & glazing"],
    upcoming: generateUpcomingSessions(5, 10)
  },
  {
    id: "c2",
    name: "Wheel Throwing for Beginners",
    price: 95,
    duration: "3 hours",
    shortDescription: "Learn how to center clay and create basic forms on the pottery wheel.",
    description: "This beginner-friendly wheel throwing class will introduce you to the pottery wheel in a supportive environment. You'll learn how to center clay on the wheel, open the clay, and pull up walls to create cylindrical forms like cups and bowls. Our experienced instructors will guide you through the process step by step, providing hands-on assistance when needed. This class is perfect for those who have never touched a pottery wheel before. All materials are included.",
    category: "beginner",
    image: "https://images.pexels.com/photos/4207795/pexels-photo-4207795.jpeg",
    instructor: "James Chen",
    featured: true,
    materials: ["Clay", "Wheel access", "Tools", "Firing & glazing"],
    upcoming: generateUpcomingSessions(4)
  },
  {
    id: "c3",
    name: "Glaze Chemistry Workshop",
    price: 120,
    duration: "2 days (4 hours each)",
    shortDescription: "Dive into the science and art of ceramic glazes in this advanced workshop.",
    description: "Our Glaze Chemistry Workshop is designed for intermediate to advanced potters who want to understand the science behind ceramic glazes. Over two days, you'll learn about glaze components, formulation, testing methods, and application techniques. You'll create your own test tiles with different glaze combinations and learn how to adjust recipes for desired effects. This workshop includes both theoretical knowledge and practical application. Previous pottery experience is required.",
    category: "advanced",
    image: "https://images.pexels.com/photos/4207812/pexels-photo-4207812.jpeg",
    instructor: "Dr. Robert Williams",
    featured: false,
    materials: ["Glaze materials", "Test tiles", "Notebook", "Firing"],
    upcoming: generateUpcomingSessions(2, 6)
  },
  {
    id: "c4",
    name: "Handbuilding Mugs and Cups",
    price: 85,
    duration: "3 hours",
    shortDescription: "Create unique mugs and cups using handbuilding techniques.",
    description: "In this fun and creative workshop, you'll learn various handbuilding techniques to create unique mugs and cups. We'll cover slab construction, handle pulling, surface texturing, and decorative elements. You'll have the opportunity to make two to three pieces during the class, which we'll fire and glaze for you to pick up later. This class is suitable for beginners as well as those with some pottery experience looking to improve their handbuilding skills.",
    category: "beginner",
    image: "https://images.pexels.com/photos/5207506/pexels-photo-5207506.jpeg",
    instructor: "Sofia Martinez",
    featured: true,
    materials: ["Clay", "Tools", "Texture materials", "Firing & glazing"],
    upcoming: generateUpcomingSessions(4)
  },
  {
    id: "c5",
    name: "Intermediate Wheel Throwing",
    price: 110,
    duration: "4 hours",
    shortDescription: "Perfect your throwing skills and learn to create more complex forms.",
    description: "This intermediate wheel throwing class is designed for students who have some experience on the pottery wheel and want to refine their skills. You'll learn techniques for creating larger vessels, adding feet, pulling handles, and trimming techniques. Our instructor will demonstrate various centering methods and guide you through the creation of more complex forms like teapots, pitchers, and lidded jars. This class is recommended for those who have taken a beginner wheel throwing class or have equivalent experience.",
    category: "intermediate",
    image: "https://images.pexels.com/photos/3094346/pexels-photo-3094346.jpeg",
    instructor: "Michael Brown",
    featured: false,
    materials: ["Clay", "Wheel access", "Advanced tools", "Firing & glazing"],
    upcoming: generateUpcomingSessions(3)
  },
  {
    id: "c6",
    name: "Weekend Pottery Retreat",
    price: 275,
    duration: "Weekend (Sat-Sun, 10am-4pm)",
    shortDescription: "Immerse yourself in ceramics with this intensive weekend workshop.",
    description: "Our Weekend Pottery Retreat offers an immersive ceramic experience over two full days. You'll have the opportunity to work with different techniques including wheel throwing, handbuilding, and surface decoration. This retreat is perfect for both beginners and intermediate students who want dedicated time to explore various aspects of pottery. The small class size ensures personalized attention from our instructors. Lunch is provided both days, and all your finished work will be fired and available for pickup two weeks after the workshop.",
    category: "workshop",
    image: "https://images.pexels.com/photos/5412132/pexels-photo-5412132.jpeg",
    instructor: "Team Teaching",
    featured: true,
    materials: ["All clay and materials", "Lunch both days", "Notebook", "Firing & glazing"],
    upcoming: generateUpcomingSessions(2, 12)
  }
];

export const getClassById = (id: string): WorkshopClass | undefined => {
  return classes.find(c => c.id === id);
};

export const getClassesByCategory = (category: string): WorkshopClass[] => {
  return classes.filter(c => c.category === category);
};

export const getFeaturedClasses = (): WorkshopClass[] => {
  return classes.filter(c => c.featured);
};