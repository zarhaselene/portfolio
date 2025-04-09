import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaRegFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SocialIcon = ({ href, icon: Icon, tooltip, id }) => (
  <>
    {tooltip && <Tooltip id={id} place="top" content={tooltip} />}
    <a
      href={href}
      target="_blank"
      className="hover:animate-jello transition-colors duration-300 ease-linear hover:text-secondary"
      rel="noreferrer"
      data-tooltip-id={id}
    >
      <Icon size={25} />
    </a>
  </>
);

const SocialLinks = [
  {
    href: "/zarhaselene/Zarha_Buske_Resume.pdf",
    icon: FaRegFileAlt,
    tooltip: "Download my resume",
    id: "resume-tooltip",
  },
  { href: "mailto:zarhabuske@hotmail.com", icon: HiOutlineMail },
  { href: "https://linkedin.com/in/zarhabuske", icon: FaLinkedinIn },
  { href: "https://github.com/zarhaselene", icon: FaGithub },
];

export default function Socials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value after component mounts
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="fixed bottom-0 left-2 md:left-auto z-10">
          <div className="flex flex-col items-center space-y-5">
            {SocialLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
            <div className="line mt-3 h-16 border-l-2 border-base-content"></div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-base-100 bg-opacity-90 z-50">
          <div className="flex justify-around items-center py-4 px-4">
            {SocialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center text-[#E0E4E7] hover:text-[#B5C1C9] transition-colors duration-300"
              >
                <link.icon size={24} className="mb-1" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
