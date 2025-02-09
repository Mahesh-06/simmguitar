import React from "react";
import Artists from "../about/Artists";
import Testimonals from "../about/Testimonals";
import Team from "../about/Team";

const About = () => {
  return (
    <div style={{ backgroundColor: "black", paddingBottom: "10px" }}>
      
      <Artists />
      <Testimonals />
      <Team />
    </div>
  );
};

export default About;
