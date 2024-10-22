import React from "react";
import { RevolvingDot } from "react-loader-spinner";

export const Loader = ({ className }) => {
  return (
    <div className={className}>
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
