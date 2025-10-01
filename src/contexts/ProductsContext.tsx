import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import { type Product } from '../types';

interface ProductsContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  categories: string[];
  refetch: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estrai categorie uniche dai prodotti
  const categories = [...new Set(products.map(product => product.category))];

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel caricamento dei prodotti');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{
      products,
      loading,
      error,
      categories,
      refetch
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}
