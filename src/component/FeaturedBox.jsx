import React from "react";
import actor from "../assets/image/Profive.jpg";
function FeaturedBox() {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Electronic devices</span>
        </div>
        <div className="featured-name">
          This is a camera.<span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            กล้องคอมแพคระดับสูงของ Canon อย่าง PowerShot G1 X Mark III
            มีเซนเซอร์ภาพขนาด APS-C ความละเอียด 24 ล้านพิกเซล ซึ่งเท่ากับในกล้อง
            DSLR และกล้องมิเรอร์เลสหลายรุ่น และยังมีช่องมองภาพอิเล็กทรอนิกส์
            (EVF) แฟลชติดกล้อง และฐานเสียบแฟลชที่สามารถติดตั้งแฟลช Speedlite
            ได้หากคุณอยากลองใช้แฟลชเสริม
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now<i className="uil uil-import"></i>
          </button>
          <button className="btn">
            Know more <i className="uil uil-import"></i>
          </button>
        </div>
        {/* <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/satunaja99/">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/pluem.nitiphon/">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Pluem10">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div> */}
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={actor} alt="" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default FeaturedBox;
