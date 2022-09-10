import * as React from "react";

import { Heading, Description } from "@components";

export const Faq = ({ question, answer }) => {
  return (
    <div className="flex flex-col">
      <Heading type="h3" size="text-lg md:text-xl 2xl:text-2xl" className="mb-4">{question}</Heading>
      <Description>{answer}</Description>
    </div>
  );
};
