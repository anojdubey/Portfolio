import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/anojdubey"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <BsGithub color="black" />
        </a>
      </div>
      {/* <div>
        <a
          href="https://leetcode.com/Dheeraj-bhandari/"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <BsCodeSlash color="black" />
        </a>
      </div> */}
      {/* <div>
        <a
          href="https://www.youtube.com/channel/UChXHt9pHik0rR0iZDOHNdsg"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsYoutube color="black" />
        </a>
      </div> */}
      <div>
        <a
          href="https://www.linkedin.com/in/anoj-dubey-66293021b"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsLinkedin color="black" />
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1xG2V2v7pXeuverwvqK4k-nIGuh-AS0Zz/view?usp=sharing"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png"
            alt="resume icon"
            width="30px"
            height="30px"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
