import React from "react";

const Programme = (props) => {
  return (
    <div className="container-programme">
      <div className="container-time">
        <p className="time">{props.prog.time}</p>
      </div>
      <img className="imgProg" src={props.prog.image} alt="" />
      <div className="infos">
        <h2 className="title">{props.prog.title}</h2>
        <p className="progType">{props.prog.type}</p>
        <span className="duree">{props.prog.duration}</span>
        {props.prog.direct ? (
          <span className="direct-unseen">.Direct</span>
        ) : (
          <span></span>
        )}
        {props.prog.isUnseen ? (
          <span className="direct-unseen">.Inedit</span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Programme;
