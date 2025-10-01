import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useProducts } from '../contexts/ProductsContext';
import './Home.css';

function Home() {
    const { user } = useUser();
    const { products } = useProducts();

    // Prendi i prodotti in evidenza (primi 3)
    const featuredProducts = products.slice(0, 3);

    // Statistiche fittizie per dimostrazione
    const stats = [
        { number: '10K+', label: 'Streamer Attivi' },
        { number: '50K+', label: 'Prodotti Venduti' },
        { number: '1M+', label: 'Fan Community' },
        { number: '24/7', label: 'Supporto Live' }
    ];

    const features = [
        {
            icon: '🎮',
            title: 'Gaming Community',
            description: 'Unisciti a migliaia di streamer e giocatori professionisti'
        },
        {
            icon: '🛍️',
            title: 'Merch Esclusivo',
            description: 'Prodotti ufficiali dei tuoi streamer preferiti'
        },
        {
            icon: '📱',
            title: 'App Mobile',
            description: 'Segui gli stream ovunque ti trovi'
        },
        {
            icon: '💎',
            title: 'Premium Content',
            description: 'Contenuti esclusivi per i veri fan'
        }
    ];

    return (
        <div className="page home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {user ? `Bentornato, ${user.name}!` : 'Benvenuti su StreamerHub'}
                    </h1>
                    <p className="hero-subtitle">
                        La piattaforma definitiva per creator e fan. Scopri, connetti e supporta i tuoi streamer preferiti.
                    </p>
                    <div className="hero-actions">
                        {!user && (
                            <Link to="/login" className="btn-primary btn-large">
                                Unisciti alla Community
                            </Link>
                        )}
                        <Link to="/merch" className="btn-secondary btn-large">
                            Scopri il Merch
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-cards">
                        <div className="card card-1">🎮 Live Now</div>
                        <div className="card card-2">🔥 Trending</div>
                        <div className="card card-3">⭐ New Drops</div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            {featuredProducts.length > 0 && (
                <section className="featured-section">
                    <h2 className="section-title">Prodotti in Evidenza</h2>
                    <div className="featured-grid">
                        {featuredProducts.map(product => (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className="featured-card"
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="product-info">
                                    <h3>{product.title}</h3>
                                    <p className="price">${product.price}</p>
                                    <span className="category-tag">{product.category}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="section-actions">
                        <Link to="/merch" className="btn-primary">
                            Vedi Tutti i Prodotti
                        </Link>
                    </div>
                </section>
            )}

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Perché Scegliere StreamerHub</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Pronto a Far Parte della Community?</h2>
                    <p>Unisciti a migliaia di creator e fan in tutta Italia</p>
                    <div className="cta-actions">
                        {!user ? (
                            <>
                                <Link to="/login" className="btn-primary btn-large">
                                    Registrati Gratis
                                </Link>
                                <Link to="/streams" className="btn-secondary btn-large">
                                    Scopri gli Stream
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/streams" className="btn-primary btn-large">
                                    Guarda gli Stream Live
                                </Link>
                                <Link to="/profile" className="btn-secondary btn-large">
                                    Il Tuo Profilo
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;