import React from "react";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";
import { Link } from "react-router-dom";

const Artists = () => {
  return (
    <div className="BlogStyle">
      <div className="blogHeader">
        <h4 className="blogHead">About</h4>
        <p className="blogHome">
          <Link to={"/"} className="bloglink">
            Home{" "}
          </Link>{" "}
          <span style={{ color: "lawngreen" }}>/</span> about
        </p>
      </div>
      <div className="aboutartists">
        <div className="artistsData">
          <div className="aboutimgdiv">
            <img src="/assets/images/about/about1.jpg" alt="" />
          </div>
          <div className="aboutDetails">
            <GrRestroomWomen className="sicon" style={{ fontSize: "50px" }} />
            <p className="artistName"> Cillian Breathnach</p>
            <p className="aboutdesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ut dignissimos? Libero natus, nesciunt nostrum temporibus
              voluptatibus, ratione voluptatem, est illum adipisci dolorem
              ipsam. Cumque exercitationem eum debitis iusto sequi?
            </p>
          </div>
        </div>

        <div className="artistsDataWeb">
          <div className="aboutDetails">
            <GrRestroomMen className="sicon" style={{ fontSize: "50px" }} />
            <p className="artistName"> Arjit Singh</p>
            <p className="aboutdesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ut dignissimos? Libero natus, nesciunt nostrum temporibus
              voluptatibus, ratione voluptatem, est illum adipisci dolorem
              ipsam. Cumque exercitationem eum debitis iusto sequi?
            </p>
          </div>
          <div className="aboutimgdiv">
            <img src="/assets/images/about/about2.jpeg" alt="" />
          </div>
        </div>

        <div className="artistsDataMobile">
          <div className="aboutimgdiv">
            <img src="/assets/images/about/about2.jpeg" alt="" />
          </div>
          <div className="aboutDetails">
            <GrRestroomMen className="sicon" style={{ fontSize: "50px" }} />
            <p className="artistName"> Arjit Singh</p>
            <p className="aboutdesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ut dignissimos? Libero natus, nesciunt nostrum temporibus
              voluptatibus, ratione voluptatem, est illum adipisci dolorem
              ipsam. Cumque exercitationem eum debitis iusto sequi?
            </p>
          </div>
        </div>

        <div className="artistsData">
          <div className="aboutimgdiv">
            <img src="/assets/images/about/about1.jpg" alt="" />
          </div>
          <div className="aboutDetails">
            <GrRestroomWomen className="sicon" style={{ fontSize: "50px" }} />
            <p className="artistName"> Cillian Breathnach</p>
            <p className="aboutdesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ut dignissimos? Libero natus, nesciunt nostrum temporibus
              voluptatibus, ratione voluptatem, est illum adipisci dolorem
              ipsam. Cumque exercitationem eum debitis iusto sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
