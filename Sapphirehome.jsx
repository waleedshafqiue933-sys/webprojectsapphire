import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/s1.webp";
import image2 from "../assets/s2.webp";
import image3 from "../assets/s3.webp";
import WhatsNew from "./Whatsnew";
import Sapphireategories from "./Sapphirecatagories";
import Sapphiremore from "./Sapphiremore";
const Sapphirehome = () => {
  const settings = {
    infinite: true,
    autoplay: true, 
    autoplaySpeed: 2000, 
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  return (
    <>
    <div className="container-fluid p-0 overflow-hidden position-relative" style={{overflowX:"hidden",overflowY:"hidden"}}>
      <Slider {...settings}>

        <div>
          <div className="position-relative">

            <img
              src={image1}
              alt="Slide 1"
              className="w-100 d-none d-md-block"
              style={{ height: "73vh", objectFit: "cover" }}
            />

            <img
              src={image1}
              alt="Slide 1 Mobile"
              className="w-100 d-block d-md-none"
              style={{ height: "auto", objectFit: "contain" }}
            />

            <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y px-5 text-start">
              <h1 className="fw-bold display-4 text-light">Unstitched Collection</h1>
              <p className="fs-5 text-light">Festive 25 Edition</p>
              <button className="btn btn-light px-4 py-2">Shop Now</button>
            </div>

            <div className="d-block d-md-none text-center p-3">
              <h2 className="fw-bold text-dark">Unstitched Collection</h2>
              <p className="text-dark">Festive 25 Edition</p>
              <button className="btn btn-dark px-4 py-2">Shop Now</button>
            </div>
          </div>
        </div>

        <div>
          <div className="position-relative">
            <img
              src={image2}
              alt="Slide 2"
              className="w-100 d-none d-md-block"
              style={{ height: "73vh", objectFit: "cover" }}
            />
            <img
              src={image2}
              alt="Slide 2 Mobile"
              className="w-100 d-block d-md-none"
              style={{ height: "auto", objectFit: "contain" }}
            />

            <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y px-5 text-start">
              <h1 className="fw-bold display-4 text-light">READY TO WEAR</h1>
              <p className="fs-5 text-light">INTERMIX &apos;25 - NEW ARRIVAL</p>
              <button className="btn btn-light px-4 py-2">Shop Now</button>
            </div>

            <div className="d-block d-md-none text-center p-3">
              <h2 className="fw-bold text-dark">READY TO WEAR</h2>
              <p className="text-dark">INTERMIX &apos;25 - NEW ARRIVAL</p>
              <button className="btn btn-dark px-4 py-2">Shop Now</button>
            </div>
          </div>
        </div>

        <div>
          <div className="position-relative">
            <img
              src={image3}
              alt="Slide 3"
              className="w-100 d-none d-md-block"
              style={{ height: "73vh", objectFit: "cover" }}
            />
            <img
              src={image3}
              alt="Slide 3 Mobile"
              className="w-100 d-block d-md-none"
              style={{ height: "auto", objectFit: "contain" }}
            />

            <div
              className="d-none d-md-block position-absolute top-50 translate-middle-y text-end"
              style={{ right: "8%", maxWidth: "40%" }}
            >
              <h1 className="fw-bold display-4 text-dark">MAN</h1>
              <p className="fs-5 text-dark">INTERMIX &apos;25</p>
              <div>
                <button className="btn btn-light px-4 py-2 me-2">Unstitched</button>
                <button className="btn btn-light px-4 py-2">Stitched</button>
              </div>
            </div>
            <div className="d-block d-md-none text-center p-3">
              <h2 className="fw-bold text-dark">MAN</h2>
              <p className="text-dark">INTERMIX &apos;25</p>
              <button className="btn btn-dark px-4 py-2 me-2">Unstitched</button>
              <button className="btn btn-dark px-4 py-2">Stitched</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    <WhatsNew/>
    <Sapphireategories/>
    <Sapphiremore/>
    </>
  );
};

export default Sapphirehome;
