// Import images
import dataScienceImg from "../../assets/images/project1.png";
import whatsappImg from "../../assets/images/project2.png";
import auctionImg from "../../assets/images/project3.jpg";
import twitterImg from "../../assets/images/project4.jpg";

const projects = {
  data: [
    {
      id: "R_kgDOJWL0-g",
      name: "Ai-Based React Builder",
      createdAt: "2025-10-1",
      url: "",
      coverImage: dataScienceImg,
      description: [
        "AI-Powered Prototyping: Create responsive React projects via user prompts with real-time editing.",
        "Multi-Agent AI Integration: Connects multiple AI models for website creation.",
        "Project Management: Manage, retrieve, and edit multiple projects.",
        "Version Control: Save, revert, or continue from any previous version.",
        "Live Preview: Real-time sandbox for instant feedback.",
        "Stripe Subscription System: Manages plans, payments, and user billing.",
        "Admin Dashboard: Manage users, projects, and payments."
      ],
      isFork: false,
      languages: [
        {
          name: "Next.js",
          iconifyClass: "logos-nextjs-icon"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript"
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript-icon"
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql"
        }
      ]
    },
    {
      id: "R_kgDOG_vYHA",
      name: "WhatsApp Management System",
      createdAt: "2024-03-13",
      url: "https://drive.google.com/file/d/1YZDViYuJJHBDmxqvIZ_T93yej-PFa3DR/view?usp=sharing",
      coverImage: whatsappImg,
      description: [
        "Built a scalable platform for managing multiple WhatsApp accounts with independent sessions and persistent storage.",
        "Developed secure login system using JWT and role-based access control.",
        "Smart chatbots, auto-replies, and drag-and-drop flow builder for complex conversation scenarios.",
        "Import/export via Excel, categorize contacts, and send bulk or scheduled messages.",
        "Delivered analytics dashboard and downloadable chat history export."
      ],
      isFork: false,
      languages: [
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript"
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express"
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql"
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis"
        },
        // {
        //   name: "Docker",
        //   iconifyClass: "logos-docker-icon"
        // }
      ]
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Auction & Tender Platform",
      createdAt: "2025-06-10",
      url: "https://drive.google.com/file/d/1MK8u81w-0DoZzNAudVfSwnsLQFiXUtRF/view?usp=sharing",
      coverImage: auctionImg,
      description: [
        "Developed full-featured auction and tender platform with modular RESTful APIs.",
        "Secure account management (JWT), password reset, and email/WhatsApp notifications.",
        "Enabled creating, browsing, participating, and paying fees for auctions/tenders; non-winners get refunds.",
        "Implemented wallet system with deposit/withdrawal and activity tracking.",
        "Added filtering, favorites, and user-specific views.",
        "Developed admin dashboard for managing auctions, tenders, users, wallet, and analytics.",
        "Hosted backend and supported image uploads to external storage."
      ],
      isFork: false,
      languages: [
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript"
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express"
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon"
        }
      ]
    },
    {
      id: "R_kgDOG0_8uQ",
      name: "Twitter Clone Project",
      createdAt: "2023-02-11T14:50:20Z",
      url: "https://drive.google.com/file/d/1p3YLYIBbGYJ5t-GTi_Uf48hKIh5nOScH/view?usp=sharing",
      coverImage: twitterImg,
      description: [
        "Developed a Twitter-like application using Laravel and Bootstrap with MVC architecture.",
        "Implemented responsive design for seamless use across devices.",
        "Added search and explore functionality to discover users and content.",
        "Enabled profile management, followers/following, and user timelines.",
        "Implemented tweeting, notifications, and user authentication with email verification.",
        "Applied permissions, rules, and role-based access to secure features."
      ],
      isFork: false,
      languages: [
        {
          name: "PHP",
          iconifyClass: "logos-php"
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript"
        },
        {
          name: "Blade",
          iconifyClass: "simple-icons:laravel"
        }
      ]
    }
  ]
};

export default projects;