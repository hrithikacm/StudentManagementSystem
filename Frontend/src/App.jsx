import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<StudentForm />} />
            <Route path="/edit/:id" element={<StudentForm />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;


