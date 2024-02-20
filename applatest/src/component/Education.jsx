import React from "react";

const Education = ({ formData, setFormData }) => {
  // edu1_school: "",
  // edu1_year: "",
  // edu1_qualification: "",
  // edu1_desc: "",
  // edu2_school: "",
  // edu2_year: "",
  // edu2_qualification: "",
  // edu2_desc: "",
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your first institute name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="edu1_year" className="form-label">
            Year your graduated
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="edu1_qualification" className="form-label">
            Degree your persued
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu1_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualification: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Enter a short description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>
        <hr />

        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your second institute name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="edu1_year" className="form-label">
            Year your graduated 
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="edu2_qualification" className="form-label">
            Degree your persued in second institute
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu2_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualification: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu2_desc" className="form-label">
            Enter a short description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            placeholder="Enter here a short description"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>

      </form>
    </div>
  );
};

export default Education;
