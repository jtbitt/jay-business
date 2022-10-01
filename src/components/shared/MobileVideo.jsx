import * as React from "react";

export const MobileVideo = ({ url }) => {
  return (
    <div className="flex flex-row justify-center">
      <video className="w-full sm:w-1/3 xl:w-1/4" controls allow="autoplay">
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};
