import * as React from "react";

import { Button } from "@components";

export const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      className="text-base md:text-lg 2xl:text-xl font-light tracking-widest"
      aria-label="Contact me"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <label className="md:w-1/2 flex flex-col gap-4">
            Name*
            <input
              required
              type="text"
              name="name"
              placeholder="Jay Bittner"
              id="name"
              className="text-black p-2.5 font-medium"
            />
          </label>
          <label className="md:w-1/2 flex flex-col gap-4">
            Email*
            <input
              required
              type="email"
              name="email"
              placeholder="jay@example.com"
              id="email"
              className="text-black p-2.5 font-medium"
            />
          </label>
        </div>
        <fieldset className="flex flex-col space-y-4">
          <legend>What service are you interested in?*</legend>
          <label>
            <input
              required
              type="radio"
              id="coding"
              name="service"
              value="Coding Services"
            />{" "}
            Coding Services
          </label>
          <label>
            <input
              type="radio"
              id="port"
              name="service"
              value="Port your Front-End"
            />{" "}
            Port your Front-End
          </label>
          <label>
            <input
              type="radio"
              id="website"
              name="service"
              value="Website for $1k"
            />{" "}
            Website for $1k
          </label>
        </fieldset>
        <div>
          <label className="flex flex-col gap-4">
            Please explain to me what you need help with*
            <textarea
              required
              name="message"
              placeholder="Hi, I'm trying to build..."
              id="message"
              rows="5"
              className="text-black p-2.5 font-medium"
            />
          </label>
        </div>
        <div className="text-center md:text-left">
          <Button type="submit">SEND</Button>
        </div>
      </div>
    </form>
  );
};
