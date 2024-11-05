import React from "react";
// import Nitiphonsombat from "../assets/download/Nitiphonsombat.pdf";
import actor from "../assets/image/Profive.jpg";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h2>About Me</h2>
        <h3>Follow instruction for more</h3>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>Name: G1 X Mark III </h3>
            <p>
              กล้องคอมแพคระดับสูงของ Canon อย่าง PowerShot G1 X Mark III
              มีเซนเซอร์ภาพขนาด APS-C ความละเอียด 24 ล้านพิกเซล
              ซึ่งเท่ากับในกล้อง DSLR และกล้องมิเรอร์เลสหลายรุ่น
              และยังมีช่องมองภาพอิเล็กทรอนิกส์ (EVF) แฟลชติดกล้อง
              และฐานเสียบแฟลชที่สามารถติดตั้งแฟลช Speedlite
              ได้หากคุณอยากลองใช้แฟลชเสริม
            </p>
          </div>
        </div>
        <div className="featured-image">
          <div className="image">
            <img src={actor} alt="โทรศัพท์.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
