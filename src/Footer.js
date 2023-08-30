import React from "react";
import "./Footer.css";

const footerData = [
  {
    heading: "Get to Know Us",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Press Releases", href: "#" },
      { text: "Amazon Science", href: "#" },
    ],
  },
  {
    heading: "Connect with Us",
    links: [
      { text: "Facebook", href: "#" },
      { text: "Twitter", href: "#" },
      { text: "Instagram", href: "#" },
    ],
  },
  {
    heading: "Make Money with Us",
    links: [
      { text: "Sell on Amazon", href: "#" },
      { text: "Sell under Amazon Accelerator", href: "#" },
      { text: "Protect and Build Your Brand", href: "#" },
      { text: "Amazon Global Selling", href: "#" },
      { text: "Become an Affiliate", href: "#" },
      { text: "Fulfilment by Amazon", href: "#" },
      { text: "Advertise Your Products", href: "#" },
      { text: "Amazon Pay on Merchants", href: "#" },
    ],
  },
  {
    heading: "Let Us Help You",
    links: [
      { text: "COVID-19 and Amazon", href: "#" },
      { text: "Your Account", href: "#" },
      { text: "Returns Centre", href: "#" },
      { text: "100% Purchase Protection", href: "#" },
      { text: "Amazon App Download", href: "#" },
      { text: "Help", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      {footerData.map((section, index) => (
        <div className={`footer-content${index + 1}`} key={section.heading}>
          <h2>{section.heading}</h2>
          <ul>
            {section.links.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
