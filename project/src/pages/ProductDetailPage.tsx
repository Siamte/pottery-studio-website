import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Truck, Package, Shield } from 'lucide-react';
import { getProductById, Product, products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        document.title = `${foundProduct.name} | Clay Collective`;
      } else {
        navigate('/shop');
      }
    }
  }, [productId, navigate]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: product.id,
          type: 'product',
          name: product.name,
          price: product.price,
          image: product.images[0]
        });
      }
    }
  };

  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center text-studio-blue-600 hover:text-terracotta-500 mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-clay-primary-50 rounded-lg overflow-hidden mb-4"
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square"
              />
            </motion.div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`rounded-md overflow-hidden ${selectedImage === image ? 'ring-2 ring-terracotta-500' : ''
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-auto aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-2">
              {product.name}
            </h1>

            <div className="text-2xl text-terracotta-600 font-medium mb-4">
              ${product.price}
            </div>

            <p className="text-studio-blue-600 mb-6">
              {product.description}
            </p>

            {/* Product attributes */}
            <div className="space-y-4 mb-8">
              {product.dimensions && (
                <div className="flex">
                  <span className="w-32 font-medium text-studio-blue-700">Dimensions:</span>
                  <span className="text-studio-blue-600">{product.dimensions}</span>
                </div>
              )}

              {product.weight && (
                <div className="flex">
                  <span className="w-32 font-medium text-studio-blue-700">Weight:</span>
                  <span className="text-studio-blue-600">{product.weight}</span>
                </div>
              )}

              {product.materials && (
                <div className="flex">
                  <span className="w-32 font-medium text-studio-blue-700">Materials:</span>
                  <span className="text-studio-blue-600">{product.materials.join(', ')}</span>
                </div>
              )}

              {product.artist && (
                <div className="flex">
                  <span className="w-32 font-medium text-studio-blue-700">Artist:</span>
                  <span className="text-studio-blue-600">{product.artist}</span>
                </div>
              )}

              {product.colors && (
                <div>
                  <span className="block w-32 font-medium text-studio-blue-700 mb-2">Color:</span>
                  <div className="flex gap-2">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-clay-primary-50 text-studio-blue-700 rounded-md text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Add to cart */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="mr-4 font-medium text-studio-blue-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center text-studio-blue-600 hover:bg-clay-primary-50"
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center text-studio-blue-600 hover:bg-clay-primary-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-3 rounded-md flex items-center justify-center ${product.inStock
                    ? 'bg-terracotta-500 hover:bg-terracotta-600 text-white'
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                  }`}
              >
                <ShoppingBag size={20} className="mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Shipping information */}
            <div className="bg-clay-primary-50 p-4 rounded-md space-y-3">
              <div className="flex items-center text-studio-blue-700">
                <Truck size={18} className="mr-2 text-terracotta-500" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center text-studio-blue-700">
                <Package size={18} className="mr-2 text-terracotta-500" />
                <span>Carefully packaged for safe delivery</span>
              </div>
              <div className="flex items-center text-studio-blue-700">
                <Shield size={18} className="mr-2 text-terracotta-500" />
                <span>Handmade with care in our studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl text-studio-blue-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/shop/${relatedProduct.id}`} className="block aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-studio-blue-800 mb-1">
                      <Link to={`/shop/${relatedProduct.id}`} className="hover:text-terracotta-500">
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="text-terracotta-600 font-medium">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;