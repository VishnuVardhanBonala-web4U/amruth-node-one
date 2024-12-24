import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";
import HomePage from "./pages/Homepage";
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
