import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className="flex flex-col justify-center content-start h-screen pl-10">
        <h1 className="w-1/2 text-4xl font-montserrat mb-20">
          Hi, I'm Jay <br /> Front End Developer
        </h1>
        <button>ABOUT ME</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">
          And I like to build cool things
        </h1>
        <button>CONTACT ME</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">About me</h1>
        <p>
          Travel enthusiast who loves to spend my time in Latin America,
          currently planning a trip to the jungle. Life has been a great
          adventure since I learned to code. When it comes to work, I love
          tackling interesting challenges that lead to growth. Dove all in on
          knowing coding and starting from the ground up and have built myself
          into an experienced Front End developer. I feel like I've maximized
          and optimized what I can do in my previous roles and I'm ready to dig
          deeper and gain some new experiences.
        </p>
        <p>
          Would love to work on exciting React-based projects and/or with
          experienced developers.
        </p>
        <button>MY RESUME</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">Skills</h1>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">Nomad Life</h1>
        <button>GET IN TOUCH</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">Cool Things I've Built</h1>
        <button>GET IN TOUCH</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">Project Name</h1>
        <button>CHECK PROJECT</button>
        <button>CHECK CODE</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">Services</h1>
        <p>
          I'm always interested in collaborating on ambitious projects, helping
          other developers, and consulting with tech companies and startups.
        </p>
        <h1 className="text-4xl font-montserrat">Coding</h1>
        <p>
          Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
          ipsum dolor sit amet consectetur adipiscing.
        </p>
        <button>HIRE ME</button>
        <h1 className="text-4xl font-montserrat">Mentoring</h1>
        <p>
          Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
          ipsum dolor sit amet consectetur adipiscing.
        </p>
        <button>CONTACT ME</button>
        <h1 className="text-4xl font-montserrat">Web page for 1k$</h1>
        <p>
          Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
          ipsum dolor sit amet consectetur adipiscing.
        </p>
        <button>GET IT</button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen p-10">
        <h1 className="text-4xl font-montserrat">Let's Connect</h1>
        <button>GET IN TOUCH</button>
      </section>
    </Layout>
  );
};

export default IndexPage;
