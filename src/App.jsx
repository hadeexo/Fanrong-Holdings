import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ConnectSection from "./components/ConnectSection";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Board from "./pages/Board";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      {" "}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/board" element={<Board />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ConnectSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
