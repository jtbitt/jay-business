import * as React from "react";

import { Seo, Layout, Heading, Description, ContactForm } from "@components";

const ContactPage = () => {
  return (
    <Layout paddingHorizontal={false}>
      <div className="flex flex-col px-10 md:px-20 xl:px-60 space-y-6">
        <Heading
          type="h1"
          size="text-4xl md:text-5.5xl 2xl:text-6xl"
          className="text-center"
        >
          Get in touch
        </Heading>
        <Description>
          Let's get to know each other a bit and chat about the service you are
          interested in
        </Description>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <Seo
    title="Contact | Jay Bittner"
    description="Get in touch with me about whatever you need - coding, bug fixes, long term project, website migration, high-speed static website, or mentorship."
    pathname="/contact"
  />
);
