import * as React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className="flex flex-col justify-center content-start h-screen gap-20">
        <h1 className="w-1/2 sm:w-3/4 text-4xl sm:text-5xl font-montserrat">
          Hi, I'm Jay <br /> Front End Developer
        </h1>
        <Button name="ABOUT ME"></Button>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 h-screen">
        <StaticImage
          className="row-start-1 sm:row-start-1 col-start-1 sm:col-start-3 row-end-auto col-end-auto"
          layout="fullWidth"
          alt=""
          src={"../images/intro.jpg"}
          formats={["auto", "webp"]}
        />
        <div className="grid row-start-1 col-start-1 row-end-auto col-end-auto place-items-center relative">
          <h1 className="text-4xl font-montserrat">
            And I like to build cool things
          </h1>
          <Button name="CONTACT ME"></Button>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-montserrat">About me</h1>
        <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
          <StaticImage
            src="../images/about.jpg"
            alt="A photo of Jay"
            layout="fullWidth"
            className="basis-1/2"
          />
          <div className="basis-1/2 flex flex-col gap-8">
            <p>
              Travel enthusiast who loves to spend my time in Latin America,
              currently planning a trip to the jungle. Life has been a great
              adventure since I learned to code. When it comes to work, I love
              tackling interesting challenges that lead to growth. Dove all in
              on knowing coding and starting from the ground up and have built
              myself into an experienced Front End developer. I feel like I've
              maximized and optimized what I can do in my previous roles and I'm
              ready to dig deeper and gain some new experiences.
            </p>
            <p>
              Would love to work on exciting React-based projects and/or with
              experienced developers.
            </p>
            <Button name="MY RESUME"></Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Skills</h1>
      </section>
      <section className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Nomad Life</h1>
        <Button name="GET IN TOUCH"></Button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Cool Things I've Built</h1>
        <Button name="GET IN TOUCH"></Button>
      </section>
      <section className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Project Name</h1>
        <Button name="CHECK PROJECT"></Button>
        <Button name="CHECK CODE"></Button>
      </section>
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-montserrat">Services</h1>
        <p>
          I'm always interested in collaborating on ambitious projects, helping
          other developers, and consulting with tech companies and startups.
        </p>
        <h1 className="text-4xl font-montserrat">Coding</h1>
        <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
          <StaticImage
            src="../images/coding.png"
            alt="A photo of Jay"
            layout="fullWidth"
            className="basis-1/2"
          />
          <div className="basis-1/2 flex flex-col gap-8">
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
              ipsum dolor sit amet consectetur adipiscing.
            </p>
            <Button name="HIRE ME"></Button>
          </div>
        </div>
        <h1 className="text-4xl font-montserrat">Mentoring</h1>
        <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
          <StaticImage
            src="../images/mentoring.jpg"
            alt="A photo of Jay"
            layout="fullWidth"
            className="basis-1/2"
          />
          <div className="basis-1/2 flex flex-col gap-8">
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
              ipsum dolor sit amet consectetur adipiscing.
            </p>
            <Button name="CONTACT ME"></Button>
          </div>
        </div>
        <h1 className="text-4xl font-montserrat">Web page for 1k$</h1>
        <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
          <StaticImage
            src="../images/1kwebpage.jpg"
            alt="A photo of Jay"
            layout="fullWidth"
            className="basis-1/2"
          />
          <div className="basis-1/2 flex flex-col gap-8">
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
              ipsum dolor sit amet consectetur adipiscing.
            </p>
            <Button name="GET IT"></Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col h-screen gap-8">
        <h1 className="text-4xl font-montserrat">Let's Connect</h1>
        <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
          <div className="basis-1/2 flex flex-col gap-8">
            <Button name="GET IN TOUCH"></Button>
          </div>
          <StaticImage
            src="../images/connect.jpg"
            alt="A photo of Jay"
            layout="fullWidth"
            className="basis-1/2"
          />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
