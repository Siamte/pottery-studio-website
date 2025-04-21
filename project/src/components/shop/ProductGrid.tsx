import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductGridProps {
  products: Product[];
  filter?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, filter }) => {
  const filteredProducts = filter
    ? products.filter(product => product.category === filter)
    : products;

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} variants={itemVariants} />
      ))}
    </motion.div>
  );
};

interface ProductCardProps {
  product: Product;
  variants: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variants }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: product.id,
      type: 'product',
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

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
        {!product.inStock && (
          <div className="absolute top-0 left-0 bg-studio-blue-700 text-white px-4 py-1 text-sm">
            Out of Stock
          </div>
        )}
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-studio-blue-800">
            <Link to={`/shop/${product.id}`} className="hover:text-terracotta-500 transition-colors">
              {product.name}
            </Link>
          </h3>
          <span className="text-lg font-medium text-terracotta-600">
            ${product.price}
          </span>
        </div>
        <p className="text-studio-blue-600 mb-4 text-sm">
          {product.shortDescription}
        </p>
        <div className="flex space-x-2">
          <Link
            to={`/shop/${product.id}`}
            className="flex-1 text-center bg-clay-primary-100 hover:bg-clay-primary-200 text-studio-blue-800 px-4 py-2 rounded transition-colors text-sm font-medium"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`p-2 rounded transition-colors ${product.inStock
              ? 'bg-terracotta-500 hover:bg-terracotta-600 text-white'
              : 'bg-gray-300 cursor-not-allowed text-gray-500'
              }`}
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductGrid;