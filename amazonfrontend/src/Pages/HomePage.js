import React from "react";
import Footer from "../components/Layout/Footer";
import { useAuth } from "../Context/Auth";

function HomePage() {
  const [auth, setAuth] = useAuth();

  return (
    <>

      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_Day-1_2X_EN._CB575872412_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jup23p1/unrecheroroe/upd/MA_3000._CB576088600_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/JupiterGW/Unrec_Decor_PC_Day1_new._CB575919233_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/desktop/Non_Pea_Unrec_Phase_1_Tallhero_3000x1200._CB577613664_.jpg
"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Events_23/Jupiter_23/pre_book/GW/FINALCREATIVES_v2/PEAGW/DAY1GW/DAY2GW/D97892620_ITEL_P55_GW_Jupiter23_PC_Hero_3000x1200_1._CB575934035_.jpg
"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="
		https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_toys_2x-NEW._CB575816411_.jpg
"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="
		https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/GW/Phase1/Unrec/D98486283_Jupiter1_PC_Hero_3000x1200._CB575915971_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
        </div>
      </div>
      <pre> {JSON.stringify(auth, null, 4)} </pre>
      <Footer />
    </>
  );
}
export default HomePage;
