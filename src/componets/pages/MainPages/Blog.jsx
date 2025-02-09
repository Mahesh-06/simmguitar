import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="BlogStyle">
      <div className="blogHeader">
        <h4 className="blogHead">Blog</h4>
        <p className="blogHome">
          <Link to={"/"} className="bloglink">
            Home{" "}
          </Link>{" "}
          <span style={{ color: "lawngreen" }}>/</span> blog
        </p>
      </div>
      <div className="blogDetails">
        <div className="blogBlocks">
          <img src="/assets/images/blog/blog1.jpg" alt="guitaristImage" />
          <p className="guitarist">By Mahesh D | Apr 24,2024</p>
          <p className="blogGuitar">Best string guitar</p>
          <p className="blogabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            totam culpa praesentium explicabo, consequatur tempore dolor maiores
            doloribus odit!
          </p>
          <button className="blogread">
            Read more <FaArrowRightLong />
          </button>
        </div>
        <div className="blogBlocks">
          <img src="/assets/images/blog/blog2.jpg" alt="guitaristImage" />
          <p className="guitarist">By Mahesh D | Apr 24,2024</p>
          <p className="blogGuitar">Best string guitar</p>
          <p className="blogabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            totam culpa praesentium explicabo, consequatur tempore dolor maiores
            doloribus odit!
          </p>
          <button className="blogread">
            Read more <FaArrowRightLong />
          </button>
        </div>
        <div className="blogBlocks">
          <img src="/assets/images/blog/blog3.jpg" alt="guitaristImage" />
          <p className="guitarist">By Mahesh D | Apr 24,2024</p>
          <p className="blogGuitar">Best Electric guitar</p>
          <p className="blogabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            totam culpa praesentium explicabo, consequatur tempore dolor maiores
            doloribus odit!
          </p>
          <button className="blogread">
            Read more <FaArrowRightLong />
          </button>
        </div>
        <div className="blogBlocks">
          <img src="/assets/images/blog/blog1.jpg" alt="guitaristImage" />
          <p className="guitarist">By Mahesh D | Apr 24,2024</p>
          <p className="blogGuitar">Best string guitar</p>
          <p className="blogabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            totam culpa praesentium explicabo, consequatur tempore dolor maiores
            doloribus odit!
          </p>
          <button className="blogread">
            Read more <FaArrowRightLong />
          </button>
        </div>
        <div className="blogBlocks">
          <img src="/assets/images/blog/blog1.jpg" alt="guitaristImage" />
          <p className="guitarist">By Mahesh D | Apr 24,2024</p>
          <p className="blogGuitar">Best Electric guitar</p>
          <p className="blogabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            totam culpa praesentium explicabo, consequatur tempore dolor maiores
            doloribus odit!
          </p>
          <button className="blogread">
            Read more <FaArrowRightLong />
          </button>
        </div>
        <div className="blogBlocks">
          <img src="/assets/images/blog/blog1.jpg" alt="guitaristImage" />
          <p className="guitarist">By Mahesh D | Apr 24,2024</p>
          <p className="blogGuitar">Best string guitar</p>
          <p className="blogabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            totam culpa praesentium explicabo, consequatur tempore dolor maiores
            doloribus odit!
          </p>
          <button className="blogread">
            Read more <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
