import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Wave Leads - Pool Builder Marketing Experts",
  description: "Specialized lead generation and digital marketing for swimming pool builders. Generate quality leads and grow your pool business.",
};

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Process />
      <AboutSectionTwo />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
