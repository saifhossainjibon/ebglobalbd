export const COMPANY = {
  name: "EB Global",
  tagline: "A Trusted Bridge Between Continents",
  founded: 2022,
  phones: ["+880 1726-642791", "+880 1727-253485"],
  phoneLinks: ["+8801726642791", "+8801727253485"],
  email: "info@ebglobalbd.com",
  addressLines: [
    "JCX Business Tower, 1136/A, Block-I,",
    "Bashundhara Vatara, Dhaka 1229,",
    "Bangladesh",
  ],
  mapEmbed: "https://www.google.com/maps?q=JCX+Biz+Tower,+Bashundhara+R-A,+Dhaka+1229&output=embed",
};

import supplier1 from "@/assets/suppliers/1.webp";
import supplier2 from "@/assets/suppliers/2.webp";
import supplier3 from "@/assets/suppliers/3.webp";
import supplier4 from "@/assets/suppliers/4.webp";
import supplier5 from "@/assets/suppliers/5.webp";
import supplier6 from "@/assets/suppliers/6.webp";
import supplier7 from "@/assets/suppliers/7.webp";
import supplier8 from "@/assets/suppliers/8.webp";
import supplier9 from "@/assets/suppliers/9.webp";
import supplier10 from "@/assets/suppliers/10.webp";

export type Supplier = { name: string; logo: string };

export const SUPPLIERS: Supplier[] = [
  { name: "Paul Reinhart", logo: supplier1 },
  { name: "Olam Agri", logo: supplier2 },
  { name: "Cargill", logo: supplier3 },
  { name: "LDC", logo: supplier4 },
  { name: "StoneX / CDI", logo: supplier5 },
  { name: "Supplier 6", logo: supplier6 },
  { name: "Supplier 7", logo: supplier7 },
  { name: "Supplier 8", logo: supplier8 },
  { name: "Supplier 9", logo: supplier9 },
  { name: "Supplier 10", logo: supplier10 },
];

import badsha from "@/assets/buyer/1.webp";
import purbani from "@/assets/buyer/2.webp";
import chaity from "@/assets/buyer/3.webp";
import msa from "@/assets/buyer/4.webp";
import fakir from "@/assets/buyer/5.webp";
import buyer6 from "@/assets/buyer/6.webp";
import buyer7 from "@/assets/buyer/7.webp";
import buyer8 from "@/assets/buyer/8.webp";
import buyer9 from "@/assets/buyer/9.webp";
import buyer10 from "@/assets/buyer/10.webp";
import buyer11 from "@/assets/buyer/11.webp";
import buyer12 from "@/assets/buyer/12.webp";
import buyer13 from "@/assets/buyer/13.webp";
import buyer14 from "@/assets/buyer/14.webp";
import buyer15 from "@/assets/buyer/15.webp";
import buyer16 from "@/assets/buyer/16.webp";

export type Buyer = { name: string; logo: string };

export const BUYERS: Buyer[] = [
  { name: "Badsha", logo: badsha },
  { name: "Purbani", logo: purbani },
  { name: "Chaity", logo: chaity },
  { name: "MSA", logo: msa },
  { name: "Fakir", logo: fakir },
  { name: "Buyer 6", logo: buyer6 },
  { name: "Buyer 7", logo: buyer7 },
  { name: "Buyer 8", logo: buyer8 },
  { name: "Buyer 9", logo: buyer9 },
  { name: "Buyer 10", logo: buyer10 },
  { name: "Buyer 11", logo: buyer11 },
  { name: "Buyer 12", logo: buyer12 },
  { name: "Buyer 13", logo: buyer13 },
  { name: "Buyer 14", logo: buyer14 },
  { name: "Buyer 15", logo: buyer15 },
  { name: "Buyer 16", logo: buyer16 },
];

export const MEMBERSHIPS = [
  {
    abbr: "ICA",
    name: "International Cotton Association",
    desc: "As an active ICA member, we trade under globally recognized contracts ensuring fair dealing and dispute resolution.",
  },
  {
    abbr: "BCA",
    name: "Bangladesh Cotton Association",
    desc: "Our BCA membership aligns us with Bangladesh's apex cotton trade standards and local manufacturing networks.",
  },
  {
    abbr: "BIAA",
    name: "Bangladesh Indenting Agents' Association",
    desc: "Our BIAA membership certifies us as a fully compliant and transparent indenting agent in Bangladesh.",
  },
];

export const SOLUTIONS = [
  {
    title: "Strategic Indenting & Sourcing",
    desc: "Tailored cotton indenting and international sourcing aligned with the highest standards of the global textile industry.",
  },
  {
    title: "Direct Merchant Access",
    desc: "Direct engagement with world-class cotton merchants across the Americas, Africa, Central Asia and the Indian subcontinent.",
  },
  {
    title: "Transparent Trade Facilitation",
    desc: "Seamless end-to-end trade facilitation with full transparency for mills and merchants alike.",
  },
  {
    title: "Long-term Partnerships",
    desc: "Durable supply chain partnerships built on trust, precision and enduring global relationships.",
  },
];

export const EXCELLENCE = [
  "Among the youngest firms in the sector, yet recognized for exceptional reliability and consistency",
  "Deep-rooted expertise in textiles, garments and cotton trade dynamics",
  "Direct access to premier global cotton merchants",
  "A highly skilled team overseeing commercial, analytical, legal and operational excellence",
  "Robust financial standing, protecting the interests of all stakeholders",
  "A steadfast commitment to long-term partnerships built on trust and performance",
  "A fully owned office at the prestigious JCX Business Center, Dhaka",
] as const;
