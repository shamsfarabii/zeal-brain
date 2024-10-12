import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

export const runtime = "edge";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="At ZealBrain, our team is the heart of our innovation. We are a diverse group of passionate developers, creative problem-solvers, and forward-thinking technologists."
      />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
