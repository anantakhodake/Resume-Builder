import React from "react";

const Project = ({ formData, setFormData }) => {
  // proj1_title: "",
  //   proj1_link: "",
  //   proj1_desc: "",
  //   proj2_title: "",
  //   proj2_link: "",
  //   proj2_desc: "",
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your first project name here
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.proj1_title}
            onChange={(e) => {
              setFormData({ ...formData, proj1_title: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="edu1_year" className="form-label">
            Paste your project link here
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={formData.proj1_link}
            onChange={(e) => {
              setFormData({ ...formData, proj1_link: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="exp1_desc" className="form-label">
            Describe a short about your project
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.proj1_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj1_desc: e.target.value });
            }}
          />
        </div>
        <hr />

        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your second project name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.proj2_title}
            onChange={(e) => {
              setFormData({ ...formData, proj2_title: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="edu1_year" className="form-label">
            Paste your project link here
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={formData.proj2_link}
            onChange={(e) => {
              setFormData({ ...formData, proj2_link: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu2_desc" className="form-label">
            Describe a short about your project
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.proj2_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Project;
