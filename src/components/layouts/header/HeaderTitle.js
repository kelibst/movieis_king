import React from "react";
import Icofont from "react-icofont";

const HeaderTitle = () => {
  return (
    <div className="header-title">
    <div className="header-title-content">
    
   
      <div className="description">
        <p className="header-title-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          molestiae corporis debitis reprehenderit quasi alias, fuga consequatur
          vero doloribus minus, ullam ex? Aperiam nulla, a doloremque labore
          voluptates saepe sunt?
        </p>
      </div>
      <h1 className="text-white header-title-text font-weight-bolder">The Lion King</h1>

      <div className="btn btn-danger px-4">trailer <Icofont icon="play" /></div>
      <div className="btn btn-outline-secondary px-4 ml-4"><Icofont icon="share" /></div>
    </div> 
    </div>
  );
};

export default HeaderTitle;
