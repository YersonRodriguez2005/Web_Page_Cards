// ProductGrid.tsx
import React from 'react';
import { ProductCard } from './ProductCard';
import { mockProducts } from './types';

export const ProductGrid: React.FC = () => {
  // En un caso real, los datos podrían venir de un estado o un custom hook
  const products = mockProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Colección</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};