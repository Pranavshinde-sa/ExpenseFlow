import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <Navbar />

      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;