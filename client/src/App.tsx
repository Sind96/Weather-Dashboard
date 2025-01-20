import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
