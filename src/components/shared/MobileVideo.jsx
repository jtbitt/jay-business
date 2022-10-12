import * as React from "react";

export const MobileVideo = ({ url, loading = "lazy" }) => {
  return (
    <div className="flex flex-row justify-center">
      <video
        className="w-1/2 sm:w-1/3 md:w-1/4"
        playsInline
        controls
        preload="metadata"
        src={url}
        loading={loading}
      ></video>
    </div>
  );
};
