import React from "react";
import Icofont from "react-icofont";

const HeaderTitle = ({movie}) => {
  const {title, overview} = movie;
  return (
    <div className="header-title">
    <div className="header-title-content">
    
   
      <div className="description">
        <p className="header-title-desc d-none d-sm-block">
          {overview}
        </p>
      </div>
      <h1 className="text-white header-title-text font-weight-bolder">{title}</h1>

      <div className="btn btn-danger px-4">trailer <Icofont icon="play" /></div>
      <div className="btn btn-outline-secondary px-4 ml-4"><Icofont icon="share" /></div>
    </div> 
    </div>
  );
};

export default HeaderTitle;
