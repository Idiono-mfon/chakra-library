import { BrowserRouter as Router } from "react-router-dom";
import MainPages from "./pages/MainPages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <MainPages />
      <Footer />
    </Router>
  );
}

export default App;
