import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/add-job" element={<AddJobPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
