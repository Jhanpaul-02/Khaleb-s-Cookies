"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles.css";

type NavbarProps = {
  cartCount: number;
};

export default function Navbar({ cartCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="cookie-announcement">
        <p>
          Freshly baked with love <span aria-hidden="true">•</span> Small
          batches, big comfort
        </p>
      </div>

      <div className="cookie-navbar">
        <Link className="cookie-navbar__brand" href="/" aria-label="Khaleb's Cookies home">
          <span className="cookie-navbar__icon" aria-hidden="true">
            🍪
          </span>
          <span className="cookie-navbar__name">Khaleb&apos;s Cookies</span>
        </Link>

        <nav className="cookie-navbar__navigation" aria-label="Main navigation">
          <div className="cookie-navbar__desktop-links">
            <a href="#shop">Shop cookies</a>
            <a href="#how-to-order">How to order</a>
          </div>
          <button
            className="cookie-navbar__menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
          <div
            className="cookie-navbar__mobile-links"
            id="mobile-navigation"
            hidden={!menuOpen}
          >
            <a href="#shop" onClick={() => setMenuOpen(false)}>
              Shop cookies
            </a>
            <a href="#how-to-order" onClick={() => setMenuOpen(false)}>
              How to order
            </a>
          </div>
        </nav>

        <a
          className="cookie-navbar__cart"
          href="#cookie-box"
          aria-label={`Your cookie box contains ${cartCount} ${
            cartCount === 1 ? "item" : "items"
          }. View your box.`}
        >
          <span aria-hidden="true">🛒</span>
          <span className="cookie-navbar__cart-label">Your box</span>
          <span className="cookie-navbar__cart-count">{cartCount}</span>
        </a>
      </div>
    </header>
  );
}