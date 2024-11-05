import React from "react";

const ContactBox = () => {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Customer-Review</h1>
        <span>Follow instruction for more</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Review<i className="uil uil-conner-right-dow"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i>จุดเด่น Insta360 Link 2 & Link
              2C 1. ขนาดเซนเซอร์ 1/2 นิ้ว Insta360 Link 2 & Link 2C
              ใช้เซนเซอร์ขนาด 1/2 นิ้ว
              ทำให้รับแสงได้ดีกว่ากล้องตัวอื่นที่มีขนาดเล็กกว่า
              ความละเอียดวิดีโอสูงสุด 4K พร้อมโหมด HDR และแสงน้อย ส่วนระบบโฟกัส
              Phase Detection Auto
            </p>
            {/* <p>
              <i className="uil uil-envelope"></i>Phone: Tel:+66 82 234 5774
            </p> */}
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="from-inputs"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
