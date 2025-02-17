import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    className="transition-colors duration-300 ease-linear hover:text-secondary"
    rel="noreferrer"
  >
    <Icon size={25} />
  </a>
);
const SocialLinks = [
  { href: "mailto:zarhaselene@gmail.com", icon: HiOutlineMail },
  { href: "https://linkedin.com/in/zarhabuske", icon: FaLinkedinIn },
  { href: "https://github.com/zarhaselene", icon: FaGithub },
  { href: "https://codepen.io/zarhaselene", icon: FaCodepen },
];

const Socials = () => {
  return (
    <div className="hidden sm:block fixed bottom-0 left-2 z-10">
      <div className="flex flex-col items-center space-y-5">
        {SocialLinks.map((link, index) => (
          <SocialIcon key={index} {...link} />
        ))}
        <div className="line mt-3 h-16 border-l-2 border-base-content"></div>
      </div>
    </div>
  );
};

export default Socials;
