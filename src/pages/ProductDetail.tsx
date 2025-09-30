import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Product } from '../types';

function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    // Exercise 1: Display product ID
    console.log("Product ID from URL:", id);

    // Exercise 2: Fetch product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data: Product = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
                navigate('/merch');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id, navigate]);

    if (loading) return <div className="page">Caricamento prodotto...</div>;
    if (!product) return <div className="page">Prodotto non trovato</div>;

    return (
        <div className="page product-detail">
            <button onClick={() => navigate(-1)} className="btn-back">
                ← Torna indietro
            </button>

            <div className="product-detail-content">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p className="price">${product.price}</p>
                    <p className="description">{product.description}</p>
                    <p className="category">Categoria: {product.category}</p>
                    <div className="rating">
                        Valutazione: {product.rating?.rate} ⭐ ({product.rating?.count} recensioni)
                    </div>
                    <button className="btn-primary">Aggiungi al Carrello</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;