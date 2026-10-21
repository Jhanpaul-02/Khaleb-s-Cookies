import "./styles.css";

const product = {
  name: "Chocolate Chunk",
  description: "A classic cookie with rich chocolate chunks.",
  priceInCents: 350,
};

type ShopProductsProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export default function ShopProducts({
  quantity,
  onQuantityChange,
}: ShopProductsProps) {
  const subtotal = product.priceInCents * quantity;

  return (
    <div className="shop-products">
      <div className="shop-products__heading">
        <p>Made for your cookie box</p>
        <h2>A box of your favorites.</h2>
        <span>Choose a cookie to start building your box.</span>
      </div>

      <div className="shop-products__layout">
        <article className="shop-product-card">
          <div className="shop-product-card__image" aria-hidden="true">
            🍪
          </div>
          <div className="shop-product-card__details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="shop-product-card__footer">
              <div className="shop-product-card__price">
                <strong>{formatPrice(product.priceInCents)}</strong>
                <span>each</span>
              </div>
              <div className="shop-product-card__quantity">
                <button
                  type="button"
                  aria-label={`Decrease ${product.name} quantity`}
                  onClick={() =>
                    onQuantityChange(Math.max(0, quantity - 1))
                  }
                >
                  −
                </button>
                <span aria-live="polite">{quantity}</span>
                <button
                  type="button"
                  aria-label={`Increase ${product.name} quantity`}
                  onClick={() => onQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>

        <aside
          className="shop-cart"
          id="cookie-box"
          aria-labelledby="shop-cart-title"
        >
          <div className="shop-cart__heading">
            <h3 id="shop-cart-title">Your cookie box</h3>
            <span>
              {quantity} {quantity === 1 ? "cookie" : "cookies"}
            </span>
          </div>

          {quantity > 0 ? (
            <div className="shop-cart__item" aria-live="polite">
              <div>
                <strong>{product.name}</strong>
                <span>
                  {quantity} × {formatPrice(product.priceInCents)}
                </span>
              </div>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
          ) : (
            <p className="shop-cart__empty">
              Your box is empty. Add a cookie to get started.
            </p>
          )}

          <div className="shop-cart__subtotal">
            <span>Subtotal</span>
            <strong aria-live="polite">{formatPrice(subtotal)}</strong>
          </div>

          <button className="shop-cart__checkout" type="button" disabled>
            Checkout (coming later)
          </button>
          <p className="shop-cart__note">
            Checkout and payment will be added in a later step.
          </p>
        </aside>
      </div>
    </div>
  );
}
