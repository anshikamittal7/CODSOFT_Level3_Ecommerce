import React from "react";
import Alert from "react-bootstrap/Alert";

const MessageBox = ({ message, variant }) => {
  return <Alert variant={variant || "info"}>{message}</Alert>;
};

export default MessageBox;
