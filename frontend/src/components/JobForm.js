import React, { useState } from "react";
import PropTypes from "prop-types";

const JobForm = ({ onAddJob }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!company) newErrors.company = "Company is required";
    if (!type) newErrors.type = "Type is required";
    if (!location) newErrors.location = "Location is required";
    if (!description) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onAddJob({ title, company, type, location, description });
      setTitle("");
      setCompany("");
      setType("");
      setLocation("");
      setDescription("");
      setErrors({});
    }
  };

  return (
    <div className="card shadow p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className={`form-control ${errors.company ? "is-invalid" : ""}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {errors.company && (
            <div className="invalid-feedback">{errors.company}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Job Type</label>
          <input
            type="text"
            className={`form-control ${errors.type ? "is-invalid" : ""}`}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          {errors.type && <div className="invalid-feedback">{errors.type}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className={`form-control ${errors.location ? "is-invalid" : ""}`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && (
            <div className="invalid-feedback">{errors.location}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {errors.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>
    </div>
  );
};

JobForm.propTypes = {
  onAddJob: PropTypes.func.isRequired,
};

export default JobForm;
