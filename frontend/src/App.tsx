// App.tsx
import React from 'react';
import { ProductGrid } from '././components/ProductGrid';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      {/* Barra de Navegación Minimalista */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-tight text-gray-900">
            MINIMAL<span className="text-gray-400">SHOP</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#shop" className="text-gray-900 hover:text-black transition-colors">Tienda</a>
            <a href="#about" className="hover:text-black transition-colors">Nosotros</a>
            <button className="relative p-2 text-gray-700 hover:text-black transition-colors">
              <span className="sr-only">Ver carrito</span>
              {/* Icono de bolsa de compra simple (SVG) */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 12H4L5 11z" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="grow">
        <ProductGrid />
      </main>

      {/* Pie de Página */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} MinimalShop. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;