import React from "react";
export default function Badges(props) {
  const {
    Icon,
    color,
    bgColor,
    badgeName,
    size = { height: "auto", width: "auto" },
  } = props;

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "8px",
    color: color,
    backgroundColor: bgColor,
    width: size.width,
    height: size.height,
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "30px",
    borderStyle: "solid",
  };

  return (
    <>
      <div style={style}>
        <Icon />
        {badgeName}
      </div>
    </>
  );
}
