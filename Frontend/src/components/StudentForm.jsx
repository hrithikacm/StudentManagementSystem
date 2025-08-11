import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    grade: "",
    email: "",
    department: ""
  });

  const navigate = useNavigate();
  const { id } = useParams(); // edit mode if id exists

  useEffect(() => {
    if (id) {
      fetchStudent(id);
    }
  }, [id]);

  const fetchStudent = async (id) => {
    try {
      const response = await axios.get(`http://localhost:7228/api/students/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student:", error);
    }
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await axios.put(`http://localhost:7228/api/students/${id}`, student);
        alert("Student updated successfully");
      } else {
        await axios.post("http://localhost:7228/api/students", student);
        alert("Student added successfully");
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container bg-white p-5 rounded shadow" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 text-primary">
          {id ? "Edit Student" : "Add Student"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
              <input
                type="text"
                name="name"
                className="form-control"
                value={student.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Age</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-calendar-event-fill"></i></span>
              <input
                type="number"
                name="age"
                className="form-control"
                value={student.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Grade</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-award-fill"></i></span>
              <input
                type="text"
                name="grade"
                className="form-control"
                value={student.grade}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
              <input
                type="email"
                name="email"
                className="form-control"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Department</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-building"></i></span>
              <input
                type="text"
                name="department"
                className="form-control"
                value={student.department}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              <i className={`bi ${id ? "bi-pencil-square" : "bi-plus-circle"} me-2`}></i>
              {id ? "Update Student" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;



