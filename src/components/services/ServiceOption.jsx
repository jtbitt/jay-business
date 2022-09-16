import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

import { useScroll } from "@hooks";
import { Heading, Description, Button } from "@components";

export const ServiceOption = ({
  name,
  description,
  price,
  features,
  salesAction,
}) => {
  const [portal, setPortal] = useState(null);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const { enableScroll, disableScroll } = useScroll();

  useEffect(() => {
    const root = document.getElementById('portal');
    setPortal(root);
  }, []);

  const handleCalendlyToggle = (open) => {
    setCalendlyOpen(open);
    open ? disableScroll() : enableScroll();
  }

  return (
    <div className="flex flex-col bg-gray-500/70 p-6 md:p-10 box-border rounded">
      <Heading type="h2" size="text-2xl md:text-3xl 2xl:text-4xl" className="mb-4">
        {name}
      </Heading>
      <Description size="text-sm md:text-base 2xl:text-xl" className="leading-6 md:leading-7 xl:min-h-[5rem] mb-8">
        {description}
      </Description>
      <div className="flex flex-col justify-center">
        <Heading type="h3" className="mb-8">{price}</Heading>
      </div>
      <ul className="list-disc pl-4 text-sm md:text-base font-light tracking-widest space-y-2 mb-8 xl:h-72">
        {features.map((feature, key) => (
          <li key={key}>{feature}</li>
        ))}
      </ul>
      <Button onClick={() => handleCalendlyToggle(true)}>{salesAction.name}</Button>
      <PopupModal
        url="https://calendly.com/jaybittner/15min"
        onModalClose={() => handleCalendlyToggle(false)}
        open={calendlyOpen}
        rootElement={portal}
      />
    </div>
  );
};
