import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const socialLink = [
  {
    url: "https://www.linkedin.com/in/flavio-amoruso-fullstackdeveloper/",
    icon: <FaLinkedin className="nav-icon" />,
  },

  {
    url: "https://www.instagram.com/",
    icon: <FaInstagram className="nav-icon" />,
  },
  {
    url: "https://github.com/flavioamoruso",
    icon: <FaGithub className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <>
      <ul
        className={classSocial}
        style={{
          display: "flex",
          marginLeft: "45px",
          marginTop: "12px",
        }}
      >
        {socialLink.map((link) => {
          return (
            <li key={link.url} className="nav-item">
              <a href={link.url} alt={link.url} className="nav-link">
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { SocialComponent };
