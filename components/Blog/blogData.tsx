import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Luxury Infinity Pool - Miami Beach",
    paragraph:
      "Stunning oceanfront infinity pool with integrated spa and fire features. This project generated 15+ qualified leads through our targeted campaigns.",
    image: "/images/blog/pool-1.png",
    author: {
      name: "Paradise Pools",
      image: "/images/testimonials/auth-01.png",
      designation: "Miami, FL",
    },
    tags: ["luxury"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Modern Geometric Pool - Scottsdale",
    paragraph:
      "Contemporary design with clean lines and LED lighting. Client saw 300% increase in leads after launching with Deep Wave Leads.",
    image: "/images/blog/pool-2.png",
    author: {
      name: "Crystal Clear Pools",
      image: "/images/testimonials/auth-02.png",
      designation: "Phoenix, AZ",
    },
    tags: ["modern"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Natural Lagoon Pool - Beverly Hills",
    paragraph:
      "Resort-style natural pool with waterfall and tropical landscaping. Featured in our high-converting social media campaigns.",
    image: "/images/blog/pool-1.png",
    author: {
      name: "Aqua Luxury Pools",
      image: "/images/testimonials/auth-03.png",
      designation: "Los Angeles, CA",
    },
    tags: ["natural"],
    publishDate: "2024",
  },
];

export default blogData;
