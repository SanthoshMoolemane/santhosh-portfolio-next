import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-500 text-white p-4 flex justify-center space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/projects" className="hover:underline">
            Projects
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
