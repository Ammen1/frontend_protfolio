import {
  facebook,
  instagram,
  twitter,
  customer1,
  customer2,
} from "../assets/icons";

export const navLinks = [
  { href: "#active", label: "Home" },
  { href: "#services", label: "Serivces" },
  { href: "#works", label: "Experience" },
  { href: "#portfolio", label: "Protfolio" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [{ name: "Air Force 1", link: "/" }],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "amenguda@gmail.com", link: "amenguda@gmail.com" },
      { name: "+251 944365493", link: "tel:+251 944365493" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];
