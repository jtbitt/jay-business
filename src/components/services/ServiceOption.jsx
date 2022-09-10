import * as React from "react";

import { Heading, Description, Button } from "@components";

export const ServiceOption = ({
  name,
  description,
  price,
  highlights,
  callToAction,
}) => {
  return (
    <div className="flex flex-col bg-gray-500/70 p-10 box-border rounded">
      <Heading type="h3" className="mb-4">
        {name}
      </Heading>
      <Description className="md:text-base min-h-[6rem]">
        {description}
      </Description>
      <Description className="md:text-4xl mb-8">{price}</Description>
      <ul className="list-disc pl-4 text-base font-light tracking-widest space-y-2 mb-8">
        {highlights.map((highlight, key) => (
          <li key={key}>{highlight}</li>
        ))}
      </ul>
      <Button name={callToAction.name}></Button>
    </div>
  );
};
