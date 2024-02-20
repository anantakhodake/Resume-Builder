import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Extras from "./Extras";
import Detail from "./Detail";
import axios, { Axios } from "axios";
import { saveAS, saveAs } from "file-saver";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkdin: "",
    phone: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });
  const [page, setapage] = useState(0);
  const FormTitle = [
    "personalDetail",
    "Education",
    "Experience",
    "Project",
    "Extra",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Detail formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="text-center">{FormTitle[page]}</h1>
      </div>
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div>{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5">
        <button
          className="btn btn-dark"
          disabled={page === 0}
          onClick={() => {
            setapage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              axios
                .post("http://localhost:4000/create-pdf", formData)
                .then(() =>
                  axios.get("http://localhost:4000/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  saveAs(pdfBlob, "resume.pdf");
                });
            } else (
              setapage((currPage)=> currPage +1 )
            )
          }}
        >
          {page === FormTitle.length - 1 ? "downloade-pdf" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Form;
