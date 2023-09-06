import React from "react";
import { useParams } from "react-router-dom";

const Productscreen = () => {
  const params = useParams();
  const { slug } = params;
  return <div className="productscreen">{slug}</div>;
};

export default Productscreen;
