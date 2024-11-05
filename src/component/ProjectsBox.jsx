import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Popular</h1>
        <h4>Follow instruvtion for more</h4>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>PowerShot G1 X mark III</h3>
          <label>75,900 ฿ – 93,390 ฿</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Canon EOS RP Camera Full-Frame</h3>
          <label>27,900 ฿ – 39,900 ฿</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          {/* <img
            src="https://assets.central.co.th/macmodern_1111?$PNG$"
            alt="002"
          ></img> */}
          <h3>FOUR-THIRDS</h3>
          <label>฿39,990</label>
        </div>
      </div>
    </section>
  );
};
export default ProjectsBox;
