"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

const navigation = {
  social: [
    { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
    { name: "Twitter", href: "https://x.com/", icon: Twitter },
  ],
};

export default function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-blue-900 p-6 shadow-md">
      <div className="lg:px-8">
        <div className="flex justify-center items-center gap-8 py-6 mb-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon
                className="h-10 w-10 text-gray-400 transition-transform duration-300 ease-in-out transform group-hover:scale-150 group-hover:text-blue-500"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          &copy; 2025 Built by Santhosh Moolemane
        </p>
      </div>
    </footer>
  );
}
