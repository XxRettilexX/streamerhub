import type { ProductCardProps } from "../types";

function ProductCard({ title, price, image, children }: ProductCardProps) {
    const isOnSale = price < 50;

    return (
        <article className="product-card">
            <img src={image} alt={title} />
            <div className="product-content">
                <h4>{title.length > 50 ? title.substring(0, 50) + '...' : title}</h4>
                <p className="price">
                    Prezzo:
                    <strong className={isOnSale ? "on-sale" : ""}>
                        ${price.toFixed(2)}
                    </strong>
                    {isOnSale && <span className="sale-badge">OFFERTA!</span>}
                </p>
                {children}
            </div>
        </article>
    );
}

export default ProductCard;