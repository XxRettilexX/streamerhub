import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductsContext';
import { type Product } from '../types';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  // Trova il prodotto nella lista già caricata
  useEffect(() => {
    if (id && products.length > 0) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id, products]);

  if (loading) {
    return (
      <div className="page">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Caricamento prodotto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page">
        <div className="error-state">
          <h2>Prodotto non trovato</h2>
          <p>Il prodotto con ID {id} non esiste.</p>
          <button onClick={() => navigate('/merch')} className="btn-primary">
            Torna allo Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page product-detail">
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Torna indietro
      </button>

      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <div className="product-meta">
            <span className="category-badge">{product.category}</span>
            <div className="rating">
              ⭐ {product.rating?.rate} ({product.rating?.count} recensioni)
            </div>
          </div>

          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>

          <div className="product-actions">
            <button className="btn-primary btn-large">
              🛒 Aggiungi al Carrello
            </button>
            <button className="btn-secondary">
              ❤️ Aggiungi ai Preferiti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
