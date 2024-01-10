import React from "react";
export default function Card(props) {
  const { href, imgAlt, imgSrc, children } = props;

  const baseStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px",
    /* outline: "solid", */
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "2px",
  };

  const imgStyle = {
    width: "100%",
    maxHeight: "180px",
    objectFit: "cover",
  };

  const style = {
    padding: "10px",
  };

  return (
    <>
      <div style={baseStyle}>
        <img style={imgStyle} src={imgSrc} alt={imgAlt} />

        <div style={style}>{children}</div>

        <div style={style}>
          <a href={href}>Link</a>
        </div>
      </div>
    </>
  );
}
