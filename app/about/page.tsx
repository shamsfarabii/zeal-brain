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
        description="At DeepWave Leads, we believe in quality, efficiency, and customer satisfaction."
      />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
