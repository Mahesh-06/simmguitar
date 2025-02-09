import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Team = () => {
  return (
    <div className="TeamDiv">
      <div className="teamDetails">
        <div>
          <div>
            <div>
              <FaInstagram color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaFacebookF color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaTwitter color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaPinterestP color="white" fontSize={"20px"} />
            </div>
          </div>
        </div>
        <p>Caroline</p>
        <h6>Manager</h6>
      </div>
      <div className="teamDetails teamDetails1">
        <div>
          <div>
            <div>
              <FaInstagram color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaFacebookF color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaTwitter color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaPinterestP color="white" fontSize={"20px"} />
            </div>
          </div>
        </div>
        <p>Stephen</p>
        <h6>Team Lead</h6>
      </div>
      <div className="teamDetails teamDetails2">
        <div>
          <div>
            <div>
              <FaInstagram color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaFacebookF color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaTwitter color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaPinterestP color="white" fontSize={"20px"} />
            </div>
          </div>
        </div>
        <p>Elizabeth</p>
        <h6>Executive</h6>
      </div>
      <div className="teamDetails teamDetails3">
        <div>
          <div>
            <div>
              <FaInstagram color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaFacebookF color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaTwitter color="white" fontSize={"20px"} />
            </div>
            <div>
              <FaPinterestP color="white" fontSize={"20px"} />
            </div>
          </div>
        </div>
        <p>Daemon</p>
        <h6>Sales</h6>
      </div>
    </div>
  );
};

export default Team;
