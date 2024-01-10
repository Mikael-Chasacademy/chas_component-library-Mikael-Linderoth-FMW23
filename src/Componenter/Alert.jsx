import React from "react";
export default function Alert(props) {
  const { alertMessage, Icon } = props;

  const styles = {
    display: "flex",
    backgroundColor: props.bgColor,
    color: props.color,
    alignItems: "center",
    justifyContent: "start",
    gap: "8px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  };

  return (
    <>
      <span style={styles}>
        <Icon />
        {alertMessage}
      </span>
    </>
  );
}
