// types.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// data.ts
export const mockProducts: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Producto Minimalista ${i + 1}`,
  description: 'Diseño elegante y funcional para tu día a día.',
  price: 29.99 + i * 10,
  imageUrl: `https://via.placeholder.com/300x200?text=Producto+${i + 1}`
}));