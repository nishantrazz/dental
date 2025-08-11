// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog  from "./pages/Blog";
import BookAppointment  from "./pages/BookAppointment";
import Treatments  from "./pages/Treatments";


function App() {
  return (
    <Router>
      {/* Header with Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bookAppointment" element={<BookAppointment />} />
          <Route path="/treatments" element={<Treatments />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
