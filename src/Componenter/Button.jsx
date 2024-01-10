import React from "react";
export default function Button(props) {
  const {
    title = "Button",
    color = "blue",
    bgcolor = "red",
    size = { height: "auto", width: "auto" },
    disabled = false,
  } = props;

  const style = {
    width: size.width,
    height: size.height,
    color: color,
    backgroundColor: bgcolor,
    marginTop: "5px",
    marginBottom: "5px",
  };

  return (
    <>
      <button disabled={disabled} style={style}>
        {title}
      </button>
    </>
  );
}
