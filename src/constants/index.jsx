import {
  BadgeDollarSign,
  Info,
  Lightbulb,
  MapPinHouse,
  Tractor,
  Briefcase,
  Section,
  FolderSync,
  Receipt,
  Handshake,
  GraduationCap,
  Star,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "What We Offer", href: "/what we offer" },
  { label: "Contact", href: "/contact" },
];

export const timeline = [
  {
    year: 1996,
    text: "Twelve deal professionals from Heller Financial started Antares.",
  },
  { year: 2005, text: "GCU Enterprise acquires Antares for more than $5B." },
  { year: 2008, text: "GCU Enterprise acquires Merrill Lynch Capital." },
  {
    year: 2015,
    text: "Canada Pension Plan Investment Board acquires GCU’s sponsor finance business.",
  },
  { year: 2016, text: "Northleaf Capital Partners acquires a 16% stake." },
  { year: 2017, text: "Antares raises its first CLO ($2.1B)." },
  {
    year: 2020,
    text: "GCU closes Senior Loan Fund with ~$10B purchasing power.",
  },
  {
    year: 2021,
    text: "GCU becomes a signatory to Responsible Investment Principles.",
  },
  {
    year: 2023,
    text: "Launches Liquid Credit business and expands coverage into UK & Europe.",
  },
  { year: 2024, text: "Launches U.S. private wealth strategy." },
  { year: 2025, text: "Launches flagship public private credit fund ABDC." },
];

export const services = [
  {
    title: "MT103/TT",
    description: [
      "GCU offers payments that are safer,",
      "more interoperable across rails and borders,",
      "easier to reconcile, and clearer on FX outcomes",
    ],
    image: "images/GCUMT103.png",
  },
  {
    title: "Investment Management",
    description: [
      "Review and analyze your existing portfolio, ",
      "Complete Risk and Return Assessment, ",
      "Confirm your investment strategy",
    ],
    image: "images/image4.jpg",
  },
  {
    title: "Investment Transition",
    description: [
      "Establish relationships & coordinate asset transfers, ",
      "Formulate tax-efficient transition plan, ",
      "Document investment policy statement",
    ],
    image: "images/finance.png",
  },
  {
    title: "Investment Management",
    description: [
      "Monitor and manage portfolio, ",
      "Systemically rebalance portfolio, ",
      "Proactively manage your tax liability",
    ],
    image: "images/image5.jpg",
  },
  {
    title: "Portfolio Review",
    description: [
      "Review progress regularly, ",
      "Re-affirm alignment of portfolio with your plan, ",
      "Update portfolio and investment policy statement",
    ],
    image: "images/image3.jpg",
  },
  {
    title: "Advisory Services",
    description: [
      "Design and implement portfolio, ",
      "Re-affirm alignment of portfolio with your plan, ",
      "Update portfolio and investment policy statement",
    ],
    image: "images/GCU35.jpg",
  },
];

export const principles = [
  {
    title: "Fundamental Research",
    image: "/images/GCU10.webp",
    points: [
      "Disciplined credit selection, a core value of GCUs’ philosophy",
      "Consistent investment approach driven by fundamental credit underwriting",
      "Extensive analysis of transaction structure, loan documentation, collateral valuation and protections",
    ],
  },
  {
    title: "Active Management",
    image: "/images/GCU23.webp",
    points: [
      "Diligent monitoring of investments, regardless of size, rating or sector",
      "Optimization of portfolios through active trading while maintaining buy and sell discipline",
      "Capitalizing on market inefficiencies and relative value opportunities",
    ],
  },
  {
    title: "Capital Preservation",
    image: "/images/GCU9.webp",
    points: [
      "An acute focus on seeking downside protection and capital preservation",
      "Rigorous protection of invested principal and margin of safety in the event of default",
      "Analysis of capacity to repay principal and sufficient enterprise value to cover debt",
    ],
  },
];

export const courses = [
  {
    title: "Capital Markets Transaction Advisory Services",
    description:
      "Our company offers a range of services to help listed entities understand and comply with their obligations in the context of a transaction. Our capital markets team has the expertise and experience to guide you through the deal process, ensuring that all local regulatory requirements are met.",
    image: "images/mihaiVlasceanu.jpg",
  },
  {
    title: "International Business Loans",
    description:
      "We help businesses secure international funding from banks andinstitutions. Our team can structure a debt system to help businesses pay back investors and support their growth. We offer this service to businesses looking to pursue new or existing bankable projects or services.",
    image: "images/finance.png",
  },
  {
    title: "Proof Of Funds",
    description:
      "At GCU Enterprise, our Proof of Funds service is designed to empower businesses in food production, processing, and general merchandise to secure contracts and trade opportunities with confidence. We provide verified financial instruments that demonstrate funding capability for large-scale supply deals and project bids. Through our trusted banking network, clients can access secure proof of capital to support transactions, build credibility, and strengthen business partnerships. Our process ensures transparency, compliance, and reliability position in you for success in both local and international markets.",
    image: "images/image4.jpg",
  },
  {
    title: "Agricultural Finance",
    description:
      "GCU Finance issues Documentary Letters of Credit (DLCs) from DBS Singapore, totalling USD 2.9 million, to enable the export of Agro-logistics Network in Mumbai to various parts of the world, including Hong Kong, Brazil, and the USA.",
    image: "images/GCU17.webp",
  },
  {
    title: "Oil & Gas Finance",
    description:
      "GCU Finance issuea s USD 50 million Standby Letter of Credit (SBLC) from Societe Generale Bank to enable the Purchase of oil and gas products from Russian Refineries to Lisbon.",
    image: "images/Money.png",
  },
  {
    title: "Real Estate Finance",
    description:
      "GCU Finance issues a Standby Letter of Credit (SBLC) from JP Morgan Chase totaling USD 8.5 million to Finance a 100 Room 5 star Hotel Project in Slaski, Poland.",
    image: "images/GCU99.jpeg",
  },
];

export const serviceIcons = {
  "Capital Market": (
    <BadgeDollarSign color="#02066f" className="w-4 h-4 mr-2" />
  ),
  "Advisory Service": <Info color="#02066f" className="w-4 h-4 mr-2" />,
  "International Business Loan": (
    <Handshake color="#02066f" className="w-4 h-4 mr-2" />
  ),
  "Proof of Funds": <Briefcase color="#02066f" className="w-4 h-4 mr-2" />,
  "Agricultural Finance": <Tractor color="#02066f" className="w-4 h-4 mr-2" />,
  "MT103/TT": <FolderSync color="#02066f" className="w-4 h-4 mr-2" />,
  "Real Estate Finance": (
    <MapPinHouse color="#02066f" className="w-4 h-4 mr-2" />
  ),
  "Oil & Gas Finance": <Receipt color="#02066f" className="w-4 h-4 mr-2" />,
  "Training and Consultation": (
    <GraduationCap color="#02066f" className="w-4 h-4 mr-2" />
  ),
  "Cyber Security": <Lightbulb color="#02066f" className="w-4 h-4 mr-2" />,
  "Legal Representation/Analytics": (
    <Section color="#02066f" className="w-4 h-4 mr-2" />
  ),
  Others: <Star color="#02066f" className="w-4 h-4 mr-2" />,
};

export const team = [
  {
    name: "Dr. Lê Hoàng Vữ",
    role: "CEO/Chairman.",
    image: "/images/le.jpg",
  },
  {
    name: "Oliver Lombardi",
    role: "Chief Operating Officer USA",
    image: "/images/oliver.jpg",
  },
  {
    name: "Michael D. Brinegar",
    role: "Head Of Operation USA",
    image: "/images/Gunter.jpg",
  },
  {
    name: "D. Marcus Curles",
    role: "Head Of Operation Latvia",
    image: "/images/james.jpg",
  },
  {
    name: "Lois Basil",
    role: "Global Head of Alternative Investments",
    image: "/images/Basil.jpg",
  },
];

export const slides = [
  {
    title: (
      <>
        Specialized Capital Solutions.{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#2519BC] to-white text-transparent bg-clip-text">
          Certainty of Execution.
        </span>
      </>
    ),
    subtitle:
      "GCU has consistently delivered capital solutions to middle-market, private equity-backed companies",
    image: "images/GCU33.webp",
  },
  {
    title: (
      <>
        Scale, Experience and Alignment{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#2519BC] to-white text-transparent bg-clip-text">
          Drive Opportunity
        </span>
      </>
    ),
    subtitle:
      "Built on a time-tested, credit-based underwriting approach,GCU maintains one of the largest and longest tenured portfolios of U.S. middle market, private equity-owned companies.",
    image: "images/GCU18.webp",
  },
  {
    title: (
      <>
        A Framework for Effective Risk{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#2519BC] to-white text-transparent bg-clip-text">
          Management
        </span>
      </>
    ),
    subtitle:
      "GCU is committed to Responsible Investment and integrates this approach as a framework for effective risk management. Engagement with our employees and our stakeholders helps drive our Responsible Investment efforts. ",
    image: "images/GCU8.jpg",
  },
  {
    title: (
      <>
        Responsible Investment{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#2519BC] to-white text-transparent bg-clip-text">
          Policy & Report
        </span>
      </>
    ),
    subtitle:
      "Responsible Investment is integrated in our business and embedded in our identity as a leading provider of financing and investment solutions.",
    image: "images/GCU2.jpg",
  },
];
