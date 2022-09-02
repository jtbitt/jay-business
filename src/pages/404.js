import * as React from "react";

import { Layout, Heading, Description } from "@components";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout className="flex flex-col items-center h-screen">
      <Heading type="h1" className="text-center">
        404 - Page not found
      </Heading>
      <Description className="pt-10">
        Yo what's up. I gotta keep it real. This page doesn't exist.
        <br />
        <div>
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
        </div>
        <br />
        <Link to="/">
          You can get back to the site by clicking on this text or using the
          navigation menu
        </Link>
      </Description>
    </Layout>
  );
};

export default NotFoundPage;
