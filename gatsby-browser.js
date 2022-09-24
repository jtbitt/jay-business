import React from "react";

import { RootWrapper } from "@components";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};
