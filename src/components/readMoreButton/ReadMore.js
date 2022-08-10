import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ text }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleButton = () => {
    setIsReadMoreShown((prevState) => !prevState);
  };

  return (
    <div className="read-more-read-less" style={{display:"grid"}}>
      <h4>{isReadMoreShown ? text : text.substr(0, 50)+"..."}</h4>
      <button className="ButtonRead" onClick={toggleButton}>
        {isReadMoreShown ? "Read Less" : "Read More "}
      </button>
    </div>
  );
};

export default ReadMore;
