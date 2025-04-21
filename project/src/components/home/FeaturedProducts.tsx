import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedProducts, Product } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-clay-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-4">
            Featured Collection
          </h2>
          <p className="text-studio-blue-600 max-w-2xl mx-auto">
            Explore our most popular handcrafted ceramic pieces, each telling a unique story through form and texture.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} variants={itemVariants} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-clay-primary-500 hover:bg-clay-primary-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  variants: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
    >
      <Link to={`/shop/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-6">
        <h3 className="font-serif text-xl text-studio-blue-800 mb-2">
          <Link to={`/shop/${product.id}`} className="hover:text-terracotta-500 transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-studio-blue-600 mb-4 text-sm">
          {product.shortDescription}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-terracotta-600">
            ${product.price}
          </span>
          <Link
            to={`/shop/${product.id}`}
            className="text-studio-blue-700 hover:text-terracotta-500 text-sm font-medium transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;