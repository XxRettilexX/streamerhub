import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

function Merch() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then((data: Product[]) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="page">Caricamento prodotti...</div>;

    return (
        <div className="page">
            <h1>Merchandising</h1>
            <div className="products-grid">
                {products.map((product: Product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
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
        </div>
    );
}

export default Merch;