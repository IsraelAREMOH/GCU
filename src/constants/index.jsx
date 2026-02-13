import wifey from "../assets/wifey.jpg";
import ose from "../assets/ose.jpg";
import jenny from "../assets/jenny.jpg";
import camera from "../assets/camera.jpg";
import PHOTO_3 from "../assets/PHOTO_3.jpg";
import PHOTO_28 from "../assets/PHOTO_28.jpg";
import PHOTO_30 from "../assets/PHOTO_30.jpg";
import PHOTO_14 from "../assets/PHOTO_14.jpg";
import PHOTO_31 from "../assets/PHOTO_31.jpg";
import PHOTO_16 from "../assets/PHOTO_16.jpg";
import PHOTO_33 from "../assets/PHOTO_33.jpg";
import PHOTO_24 from "../assets/PHOTO_24.jpg";
import PHOTO_35 from "../assets/PHOTO_35.jpg";
import content from "../assets/content.jpg";
import lightbulbs from "../assets/lightbulbs.jpg";
import black from "../assets/black.jpg";
import PHOTO_1 from "../assets/PHOTO_1.jpg";
import Secretary from "../assets/Secretary.png";
import Photographer from "../assets/Photographer.png";
import supervisor from "../assets/supervisor.png";
import StudioManager from "../assets/StudioManager.png";
import ProjectCoordinator from "../assets/ProjectCoordinator.png";
import TRUCK from "../assets/TRUCK.png";
import PODCAST_3 from "../assets/PODCAST_3.png";
import PODCAST2 from "../assets/PODCAST2.png";
import PODCAST1 from "../assets/PODCAST1.png";
import Camera_rental from "../assets/Camera_rental.png";
import Full_production_kit from "../assets/Full_production_kit.png";
import studio_light from "../assets/studio_light.png";

import {
  Camera,
  Video,
  Lightbulb,
  Briefcase,
  Users,
  Image,
  Wrench,
  GraduationCap,
  Globe,
  Star,
} from "Lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Project", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Photography Master Class",
    description:
      "Learn how to capture lighting, moments, angles, and editing techniques to bring your creative vision to life.",
    image: PHOTO_31,
  },
  {
    title: "Film Making & Editing",
    description:
      "Dive into the filmmaking process, covering scripting, directing, shooting, and post-production editing mastery.",
    image: PHOTO_16,
  },
  {
    title: "Podcast Creation",
    description:
      "Discover how to record, create, edit, and market professional podcasts, turning ideas into sound that speaks.",
    image: PHOTO_33,
  },
  {
    title: "Photography Master Class",
    description:
      "Learn how to capture lighting, moments, angles, and editing techniques to bring your creative vision to life.",
    image: wifey,
  },
  {
    title: "Film Making & Editing",
    description:
      "Dive into the filmmaking process, covering scripting, directing, shooting, and post-production editing mastery.",
    image: camera,
  },
];

export const testimonials = [
  {
    rating: 5,
    text: "Professional, efficient, and creative—everything you want in a production partner. They brought our brand story to life with visuals that truly connect with our audience. Couldn’t have asked for a smoother process or better results.",
    name: "~Princess Omobo",
  },
  {
    rating: 5,
    text: "Professional, efficient, and creative—everything you want in a production partner. They brought our brand story to life with visuals that truly connect with our audience. Couldn’t have asked for a smoother process or better results.",
    name: "~Princess Omobo",
  },
  {
    rating: 3,
    text: "Professional, efficient, and creative—everything you want in a production partner. They brought our brand story to life with visuals that truly connect with our audience. Couldn’t have asked for a smoother process or better results.",
    name: "~Princess Omobo",
  },
  {
    rating: 5,
    text: "Professional, efficient, and creative—everything you want in a production partner. They brought our brand story to life with visuals that truly connect with our audience. Couldn’t have asked for a smoother process or better results.",
    name: "~Princess Omobo",
  },
  {
    rating: 4,
    text: "Professional, efficient, and creative—everything you want in a production partner. They brought our brand story to life with visuals that truly connect with our audience. Couldn’t have asked for a smoother process or better results.",
    name: "~Princess Omobo",
  },
];

export const courses = [
  {
    title: "Photography Masterclass",
    description:
      "Learn composition, lighting, camera settings, and editing to create compelling images across various styles – from portrait to product and event photography.",
    image: black,
  },
  {
    title: "Film making & Editing",
    description:
      "Dive into the filmmaking process, covering scriptwriting, directing, cinematography, and post-production using industry-standard tools.",
    image: PHOTO_35,
  },
  {
    title: "Podcast Creation",
    description:
      "Discover how to create, record, and publish professional podcasts. Build your confidence on the mic with voice training and storytelling techniques.",
    image: content,
  },
  {
    title: "Studio Lighting Techniques",
    description:
      "Understand lighting setups for photography and video. Learn to control shadows, highlights, and color temperature for studio and location shoots.",
    image: lightbulbs,
  },
  {
    title: "Creative Branding",
    description:
      "Learn how to package your skills, market your work, and communicate the brand that attracts the right clients and collaborators.",
    image: PHOTO_1,
  },
];

export const TrainingTestimonial = [
  {
    image: jenny,
    name: "Joel Smart",
    text: "Enrolling in the filmmaking course at QM LAWASON STUDIOS was a game-changer for me. The hands-on experience, expert guidance, and studio access helped me grow faster than I imagined. I now feel confident taking on real client work.",
  },
  {
    image: ose,
    name: "David Paul Olubode",
    text: "What stood out the most was how real and practical the training was. We weren’t just taught theory – we actually handled the equipment, worked on real projects, and got valuable feedback. It was an incredible experience.",
  },
  {
    image: wifey,
    name: "John Done",
    text: "I joined their podcast production workshop with zero background, and now I run my own podcast confidently. The sessions were practical, the team was patient, and the mentorship continued even after the class ended.",
  },
];

export const videoFiles = [
  "/videos/Video5.mp4",
  "/videos/Video8.mp4",
  "/videos/Video6.mp4",
  "/videos/Video7.mp4",
  "/videos/Video4.mp4",
  "/videos/Video8.mp4",
];
export const videoFiles2 = [
  "/videos/Video1.mp4",
  "/videos/Video2.mp4",
  "/videos/Video4.mp4",
];
export const equipmentItems = [
  { title: "Full Production Kit", src: Full_production_kit },
  { title: "Studio Rental (Hourly/Full Day)", src: Camera_rental },
  { title: "Truck Rental", src: TRUCK },
  { title: "Camera Rental", src: PODCAST_3 },
  { title: "Lighting Rental", src: studio_light },
];

export const podcastImages = [
  { src: PODCAST1 },
  { src: PODCAST2 },
  { src: PODCAST_3 },
];

export const serviceIcons = {
  "Pre-wedding shoot": <Camera className="w-4 h-4 mr-2" />,
  "Wedding shoot": <Camera className="w-4 h-4 mr-2" />,
  "Event Photography": <Image className="w-4 h-4 mr-2" />,
  "Product Photography": <Briefcase className="w-4 h-4 mr-2" />,
  "Family & Children Photography": <Users className="w-4 h-4 mr-2" />,
  "Head Shot Photography": <Image className="w-4 h-4 mr-2" />,
  "Wedding Videography": <Video className="w-4 h-4 mr-2" />,
  "Equipment Rentals": <Wrench className="w-4 h-4 mr-2" />,
  "Training & Consulting": <GraduationCap className="w-4 h-4 mr-2" />,
  "Lighting Services": <Lightbulb className="w-4 h-4 mr-2" />,
  "Outdoor Portrait Shoot": <Globe className="w-4 h-4 mr-2" />,
  Others: <Star className="w-4 h-4 mr-2" />,
};

export const team = [
  {
    name: "Lawani Godwin",
    role: "CEO",
    image: PHOTO_24,
  },
  {
    name: "Monisola Lisk-Corine",
    role: "Legal Advisor / Secretary",
    image: Secretary,
  },
  {
    name: "Iyenoluwa Adebayo",
    role: "HR / Project Co-ordinator",
    image: ProjectCoordinator,
  },
  {
    name: "Namdian Godswillcee",
    role: "Studio Manager",
    image: StudioManager,
  },
  {
    name: "Oluwayemisi Titilayo Olojokunke",
    role: "Studio Supervisor",
    image: supervisor,
  },
  {
    name: "Njoku Uche Adebayo",
    role: "Photographer",
    image: Photographer,
  },
];

export const slides = [
  {
    title: (
      <>
        We Don’t Just Create -{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#19673B] to-[#19673B] text-transparent bg-clip-text">
          We Tell Stories
        </span>
      </>
    ),
    subtitle:
      "At GM LAWASON STUDIOS, our passion is visual storytelling. from concept to completion, we blend creativity and precision to craft visuals that leave a lasting impression.",
    image: PHOTO_30,
  },
  {
    title: (
      <>
        Your Creative Vision,{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#19673B] to-[#19673B] text-transparent bg-clip-text">
          Our Expertise
        </span>
      </>
    ),
    subtitle:
      "We offer a wide range of professional services tailord for visual creators - from photography, studio rentals, production to editing and podcast setups.",
    image: PHOTO_28,
  },
  {
    title: (
      <>
        Learn. Create.{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#19673B] to-[#19673B] text-transparent bg-clip-text">
          Grow
        </span>
      </>
    ),
    subtitle:
      "Join our industry-focused training programs and workshops designed for aspiring creatives. Learn hands-on from professionals in a real studio environment. ",
    image: PHOTO_3,
  },
  {
    title: (
      <>
        Our Work Speakes Louder{" "}
        <span className="block sm:inline bg-gradient-to-r from-[#19673B] to-[#19673B] text-transparent bg-clip-text">
          Than Words
        </span>
      </>
    ),
    subtitle:
      "Dive into our creative archive - a visual journey through the project we've passionately brought to life.",
    image: PHOTO_14,
  },
];
