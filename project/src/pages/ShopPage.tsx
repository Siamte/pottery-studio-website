import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/shop/ProductGrid';
import ProductFilter from '../components/shop/ProductFilter';
import { products } from '../data/products';

const categories = [
  { id: 'tableware', name: 'Tableware' },
  { id: 'decor', name: 'Home Decor' },
  { id: 'wellness', name: 'Wellness' }
];

const ShopPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    document.title = 'Shop | Clay Collective';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-studio-blue-800 mb-4">
            Shop Our Collection
          </h1>
          <p className="text-studio-blue-600">
            Each piece is handcrafted with care by our skilled artisans. From functional tableware to decorative items,
            discover unique ceramics to elevate your home.
          </p>
        </div>

        {/* Filters */}
        <ProductFilter
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Product grid */}
        <ProductGrid products={products} filter={activeFilter} />
      </div>
    </div>
  );
};

export default ShopPage;