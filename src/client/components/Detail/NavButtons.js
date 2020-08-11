import React from "react";

const NavButtons = ({ next, prev, close }) => {
  return (
    <div className="btn_container btn">
      <button onClick={prev}>
        <i className="fa fa-chevron-left" />
        <a>Prev</a>
      </button>
      <button className="btn_close" onClick={close}>
        <a>close</a>
        <i className="fa fa-times-circle" />
      </button>
      <button onClick={next}>
        <a>Next</a>
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  );
};

export default NavButtons;
