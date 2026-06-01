// ProductCard.tsx
import React from 'react';
import type { Product } from './types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover bg-gray-50"
        loading="lazy"
      />
      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};