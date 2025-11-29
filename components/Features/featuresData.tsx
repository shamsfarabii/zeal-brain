import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z"
        />
        <path d="M20 8C15.58 8 12 11.58 12 16C12 20.42 15.58 24 20 24C24.42 24 28 20.42 28 16C28 11.58 24.42 8 20 8ZM20 28C14 28 8 30 8 32V34H32V32C32 30 26 28 20 28Z" />
      </svg>
    ),
    title: "Lead Acquisition",
    paragraph:
      "Fill your pipeline with qualified homeowners ready to invest in their dream pool. Our targeted campaigns attract high-intent buyers actively searching for pool builders.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M35 5H5C2.24 5 0 7.24 0 10V30C0 32.76 2.24 35 5 35H35C37.76 35 40 32.76 40 30V10C40 7.24 37.76 5 35 5Z"
        />
        <path d="M20 15L8 22V12L20 15ZM22 15L34 12V22L22 15ZM20 17L8 24V26C8 27.1 8.9 28 10 28H30C31.1 28 32 27.1 32 26V24L20 17Z" />
      </svg>
    ),
    title: "Digital Advertising",
    paragraph:
      "Targeted campaigns on Google and Facebook that reach high-intent buyers. We optimize every dollar to maximize your return on ad spend and generate quality leads.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C12.27 0 6 6.27 6 14C6 23.5 20 40 20 40C20 40 34 23.5 34 14C34 6.27 27.73 0 20 0Z"
        />
        <path d="M20 4C25.52 4 30 8.48 30 14C30 20.5 20 34 20 34C20 34 10 20.5 10 14C10 8.48 14.48 4 20 4ZM20 10C17.79 10 16 11.79 16 14C16 16.21 17.79 18 20 18C22.21 18 24 16.21 24 14C24 11.79 22.21 10 20 10Z" />
      </svg>
    ),
    title: "Local SEO",
    paragraph:
      "Dominate local search results when homeowners look for pool builders in your area. We optimize your online presence to ensure you're found by ready-to-buy customers.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M36 0H4C1.8 0 0 1.8 0 4V28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V4C40 1.8 38.2 0 36 0Z"
        />
        <path d="M4 4H36V24H4V4ZM8 28H12V32H8V28ZM16 28H24V32H16V28ZM28 28H32V32H28V28Z" />
      </svg>
    ),
    title: "Website Design",
    paragraph:
      "Convert visitors into leads with stunning, mobile-optimized websites that showcase your portfolio and make it easy for customers to request quotes.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0Z"
        />
        <path d="M32 12L28 8L20 16L12 8L8 12L16 20L8 28L12 32L20 24L28 32L32 28L24 20L32 12ZM20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4Z" />
      </svg>
    ),
    title: "Social Media Marketing",
    paragraph:
      "Showcase your stunning pool projects and build trust with engaging content on Instagram, Facebook, and Pinterest. Turn followers into customers.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0L25.88 13.82L40 16.18L30 26.18L32.36 40L20 33.82L7.64 40L10 26.18L0 16.18L14.12 13.82L20 0Z"
        />
        <path d="M20 4L24.47 15.53L36 17.31L28 25.31L29.94 37L20 31.53L10.06 37L12 25.31L4 17.31L15.53 15.53L20 4Z" />
      </svg>
    ),
    title: "Reputation Management",
    paragraph:
      "Build credibility with authentic reviews and testimonials from satisfied customers. We help you collect and showcase the social proof that drives new business.",
  },
];

export default featuresData;
