import React from "react";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [
    isExpanded,
    setIsExpanded
  ] = React.useState(false);

  const ref = React.useRef();

  const [height, setHeight] = React.useState();

  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
  };

  const classes = `list-group-item ${
    isExpanded ? "is-expanded" : null
  }`;
  const currentHeight = isExpanded ? height : 0;
  return (
    <div
      className={classes}
      onClick={handleToggle}
    >
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div
        className="card-collapse"
        style={{ height: currentHeight + "px" }}
      >
        <div className="card-body" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string
};

export default Collapsible;
