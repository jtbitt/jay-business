import React from "react";
import "./src/styles/global.css";

import { RootWrapper } from "@components";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};
