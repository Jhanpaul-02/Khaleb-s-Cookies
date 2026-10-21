
import './styles.css';

export default function Homepage() {
  return (
    <div className="cookie-home-hero">
        <div className="cookie-home-hero__copy">
          <p className="cookie-home-hero__eyebrow">
            Your neighborhood cookie fix
          </p>
          <h1 className="cookie-home-hero__title">
            Good days start with warm cookies.
          </h1>
          <p className="cookie-home-hero__description">
            Golden edges, soft centers, and a little sweetness for your day.
          </p>
          <div className="cookie-home-hero__actions">
            <a className="cookie-home-hero__button" href="#shop">
              Build your box <span aria-hidden="true">↓</span>
            </a>
            <span className="cookie-home-hero__note">
              A sweet little moment, just for you.
            </span>
          </div>
        </div>

        <div className="cookie-home-hero__visual">
          <span className="cookie-home-hero__cookie" aria-hidden="true">
            🍪
          </span>
          <div className="cookie-home-hero__badge">
            <span aria-hidden="true">♡</span>
            <div>
              <strong>A little joy, baked fresh.</strong>
              <span>Something sweet for your day.</span>
            </div>
          </div>
        </div>
    </div>
  );
}