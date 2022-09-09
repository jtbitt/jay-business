import * as React from "react";

import { Heading, Description } from "@components";

export const Faq = ({ question, answer }) => {
  return (
    <div className="flex flex-col">
      <Heading type="h5">{question}</Heading>
      <Description>{answer}</Description>
    </div>
  );
};
