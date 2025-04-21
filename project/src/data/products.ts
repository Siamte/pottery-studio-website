export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  dimensions?: string;
  weight?: string;
  colors?: string[];
  materials?: string[];
  artist: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Hand-thrown Ceramic Mug",
    price: 32,
    shortDescription: "A beautifully crafted ceramic mug for your morning coffee or tea.",
    description: "Each of our handcrafted ceramic mugs is individually thrown on the potter's wheel, ensuring a unique piece every time. These mugs feature a comfortable handle and a smooth lip for drinking. The durable glaze finish makes them microwave and dishwasher safe while preserving their beautiful appearance for years to come.",
    category: "tableware",
    images: [
      "https://images.pexels.com/photos/4207910/pexels-photo-4207910.jpeg",
      "https://images.pexels.com/photos/5849571/pexels-photo-5849571.jpeg"
    ],
    featured: true,
    inStock: true,
    dimensions: "4.5\" height x 3.5\" diameter",
    weight: "10 oz",
    colors: ["natural clay", "speckled white", "sea blue"],
    materials: ["stoneware clay", "non-toxic glaze"],
    artist: "Emma Watson"
  },
  {
    id: "p2",
    name: "Ceramic Dinner Plate Set",
    price: 120,
    shortDescription: "Set of four handmade dinner plates with rustic finish.",
    description: "Our handmade dinner plate set features four uniquely crafted plates with a beautiful rustic finish. Each plate is fired at high temperatures to ensure durability and longevity. The slightly raised rim prevents spills, while the generous size provides ample space for your culinary creations. The neutral tones will complement any table setting.",
    category: "tableware",
    images: [
      "https://images.pexels.com/photos/6270663/pexels-photo-6270663.jpeg",
      "https://images.pexels.com/photos/6270098/pexels-photo-6270098.jpeg"
    ],
    featured: true,
    inStock: true,
    dimensions: "10.5\" diameter",
    weight: "1.5 lbs each",
    colors: ["cream", "speckled white"],
    materials: ["porcelain", "non-toxic glaze"],
    artist: "James Chen"
  },
  {
    id: "p3",
    name: "Decorative Ceramic Vase",
    price: 85,
    shortDescription: "Elegant handcrafted vase perfect for fresh or dried arrangements.",
    description: "This decorative ceramic vase is wheel-thrown and carefully shaped to create a beautiful, organic form. The unique glaze application creates subtle variations in color and texture, making each piece one-of-a-kind. The vase serves both as a functional vessel for your favorite flowers and as a standalone decorative piece.",
    category: "decor",
    images: [
      "https://images.pexels.com/photos/6044478/pexels-photo-6044478.jpeg",
      "https://images.pexels.com/photos/6045083/pexels-photo-6045083.jpeg"
    ],
    featured: true,
    inStock: true,
    dimensions: "8\" height x 5\" width",
    weight: "2 lbs",
    colors: ["terracotta", "matte black"],
    materials: ["stoneware clay", "artisanal glaze"],
    artist: "Sofia Martinez"
  },
  {
    id: "p4",
    name: "Ceramic Bowl Set",
    price: 78,
    shortDescription: "Set of three nesting bowls for serving or decoration.",
    description: "This set of three nesting ceramic bowls is perfect for serving a variety of dishes or as decorative pieces in your home. Each bowl is hand-thrown and features a unique glaze application that highlights the natural texture of the clay. The bowls are different sizes, allowing for versatile use from soup and salad to pasta and desserts.",
    category: "tableware",
    images: [
      "https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg",
      "https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg"
    ],
    featured: false,
    inStock: true,
    dimensions: "Small: 5\" diameter, Medium: 7\" diameter, Large: 9\" diameter",
    weight: "3 lbs total",
    colors: ["sandy beige", "dark blue"],
    materials: ["stoneware clay", "food-safe glaze"],
    artist: "Michael Brown"
  },
  {
    id: "p5",
    name: "Ceramic Plant Pot",
    price: 48,
    shortDescription: "Handcrafted plant pot perfect for your favorite indoor plants.",
    description: "Our handcrafted ceramic plant pots add a touch of artisanal beauty to your indoor garden. Each pot features a drainage hole and accompanying saucer to ensure proper plant care. The textured exterior and smooth interior create a beautiful contrast, while the durable construction ensures these pots will showcase your plants for years to come.",
    category: "decor",
    images: [
      "https://images.pexels.com/photos/6045259/pexels-photo-6045259.jpeg",
      "https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg"
    ],
    featured: false,
    inStock: true,
    dimensions: "6\" height x 6\" diameter",
    weight: "1.8 lbs",
    colors: ["speckled white", "earth brown"],
    materials: ["stoneware clay", "matte glaze"],
    artist: "Emma Watson"
  },
  {
    id: "p6",
    name: "Ceramic Oil Diffuser",
    price: 65,
    shortDescription: "Handmade ceramic essential oil diffuser with calming design.",
    description: "This handcrafted ceramic essential oil diffuser combines functionality with artistic design. The porous ceramic material naturally diffuses essential oils without electricity or heat. Simply add a few drops of your favorite oil to the top reservoir and enjoy the subtle, natural fragrance that will fill your space. The minimalist design complements any decor style.",
    category: "wellness",
    images: [
      "https://images.pexels.com/photos/6045222/pexels-photo-6045222.jpeg"
    ],
    featured: false,
    inStock: true,
    dimensions: "4\" height x 3\" diameter",
    weight: "0.75 lbs",
    colors: ["white", "natural clay"],
    materials: ["porous ceramic", "unglazed finish"],
    artist: "Sofia Martinez"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};