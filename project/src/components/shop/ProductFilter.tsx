import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface ProductFilterProps {
  categories: Array<{ id: string; name: string }>;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  activeFilter,
  setActiveFilter
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="mb-8">
      {/* Mobile filter toggle */}
      <div className="block md:hidden mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center justify-center w-full py-2 px-4 bg-clay-primary-100 rounded-md text-studio-blue-700 font-medium"
        >
          <Filter size={18} className="mr-2" />
          Filter Products
        </button>
      </div>

      {/* Desktop filters */}
      <div className="hidden md:block">
        <div className="flex flex-wrap gap-2">
          <FilterButton
            id=""
            name="All Products"
            isActive={activeFilter === ""}
            onClick={() => setActiveFilter("")}
          />
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              id={category.id}
              name={category.name}
              isActive={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Mobile filters */}
      <motion.div
        initial={false}
        animate={{ height: isMobileFilterOpen ? 'auto' : 0, opacity: isMobileFilterOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-4 pb-2 space-y-2">
          <FilterButton
            id=""
            name="All Products"
            isActive={activeFilter === ""}
            onClick={() => {
              setActiveFilter("");
              setIsMobileFilterOpen(false);
            }}
          />
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              id={category.id}
              name={category.name}
              isActive={activeFilter === category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setIsMobileFilterOpen(false);
              }}
              block
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface FilterButtonProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
  block?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  id,
  name,
  isActive,
  onClick,
  block = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md text-sm font-medium transition-colors
        ${block ? 'w-full text-left' : ''}
        ${isActive
          ? 'bg-terracotta-500 text-white'
          : 'bg-clay-primary-50 text-studio-blue-700 hover:bg-clay-primary-100'
        }
      `}
    >
      {name}
      {isActive && <X size={14} className="inline ml-2" />}
    </button>
  );
};

export default ProductFilter;