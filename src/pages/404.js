import * as React from "react";

import { Layout, Heading, Description } from "@components";
import { Link } from "gatsby";
import options from "@content/404.json";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen px-4 md:px-20 xl:px-40 space-y-6">
        <Heading
          type="h1"
          size="text-4xl md:text-5.5xl 2xl:text-6xl"
          className="text-center"
        >
          404 - Page not found
        </Heading>
        <Description>
          Yo what's up. I gotta keep it real. This page doesn't exist. Try to
          return to the homepage by opening the navigation menu and clicking on
          the logo.
        </Description>
        <Heading type="h2" size="text-3xl md:text-4xl 2xl:text-5xl">
          OR
        </Heading>
        <ul className="list-disc pl-4 text-base md:text-lg 2xl:text-xl font-light tracking-widest space-y-2.5">
          {options.map((option, key) => (
            <li key={key}>
              {option.copy}
              <Link className="text-amber-500" to={option.url}>
                {option.urlWord}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
