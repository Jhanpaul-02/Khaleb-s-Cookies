"use client";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Home-page/Home";
import ShopProducts from "./components/Shop/shop-products";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <section id="cookies">
          <Homepage />
        </section>
        <section id="shop">
          <ShopProducts
            quantity={cartCount}
            onQuantityChange={setCartCount}
          />
        </section>
        <section id="how-to-order">
          <h2>How to order</h2>
          <p>Ordering details will go here.</p>
        </section>
      </main>
    </>
  );
}
