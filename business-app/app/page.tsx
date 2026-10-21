import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="cookies">
          <h1>Shop cookies</h1>
          <p>Our cookie menu will go here.</p>
        </section>
        <section id="story">
          <h2>Our story</h2>
          <p>Our story will go here.</p>
        </section>
        <section id="how-to-order">
          <h2>How to order</h2>
          <p>Ordering details will go here.</p>
        </section>
      </main>
    </>
  );
}
