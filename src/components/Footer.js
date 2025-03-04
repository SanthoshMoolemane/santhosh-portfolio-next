"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import "../styles/Footer.css";

const navigation = {
  social: [
    { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
    { name: "Twitter", href: "https://x.com/", icon: Twitter },
  ],
};

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon className="icon" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="footer-text">
          &copy; 2025 Built by Santhosh Moolemane
        </p>
      </div>
    </footer>
  );
}
