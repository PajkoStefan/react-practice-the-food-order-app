import React from "react";

const DemoOutput = ({ content, show }) => {
  return <>{show && <p>{content}</p>}</>;
};

export default React.memo(DemoOutput);
