import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductsContext';

function Merch() {
  const { products, loading, error, categories } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filtra i prodotti in base alla ricerca e categoria
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  if (loading) {
    return (
      <div className="page">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Caricamento prodotti...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="error-state">
          <h2>Errore nel caricamento</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Riprova
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Merchandising</h1>
      
      {/* Filtri */}
      <div className="filters-section">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Cerca prodotti..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">Tutte le categorie</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {(searchTerm || selectedCategory) && (
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="btn-secondary"
          >
            Reset Filtri
          </button>
        )}
      </div>

      {/* Risultati */}
      <div className="results-info">
        <p>
          {filteredProducts.length === products.length 
            ? `Mostrando tutti i ${products.length} prodotti`
            : `Trovati ${filteredProducts.length} prodotti su ${products.length}`
          }
          {searchTerm && ` per "${searchTerm}"`}
          {selectedCategory && ` nella categoria "${selectedCategory}"`}
        </p>
      </div>

      {/* Grid prodotti */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="product-link"
            >
              <ProductCard 
                title={product.title}
                price={product.price}
                image={product.image}
              >
                <button className="btn-primary">Dettagli</button>
              </ProductCard>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <h3>Nessun prodotto trovato</h3>
          <p>Prova a modificare i filtri di ricerca</p>
        </div>
      )}
    </div>
  );
}

export default Merch;
