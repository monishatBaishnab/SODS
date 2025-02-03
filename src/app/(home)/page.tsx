import Navbar from "@/components/navbar/Navbar";
import Latest from "./_components/Latest";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      {/* Header section containing navbar and header elements */}
      <header>
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Main content sections */}
      <main>
        {/* Latest from SODS */}
        <section>
          <Latest />
        </section>
      </main>
      {/* Footer section */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
