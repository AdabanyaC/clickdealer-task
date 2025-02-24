import React from "react";
import "./../styles/promotions.less";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>
          <a
            href="https://www.clintonadabanya.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AdabanyaC/clickdealer-task"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Task Repository on GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/clinton-adabanya"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
