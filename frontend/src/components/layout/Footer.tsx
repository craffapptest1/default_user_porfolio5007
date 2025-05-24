"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiArrowUp, FiLinkedin, FiTwitter, FiInstagram, FiFileText, FiAward } from "react-icons/fi";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About & Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About Me</h3>
            <p className="text-sm text-gray-600">
              I'm a passionate developer showcasing my skills and projects through this portfolio. 
              Feel free to reach out for collaboration or opportunities.
            </p>
            <div className="pt-2">
              <h4 className="text-sm font-medium text-gray-800">Contact Me</h4>
              <div className="flex items-center mt-2">
                <FiMail className="h-4 w-4 text-gray-500 mr-2" />
                <a href="mailto:contact@portfolio5007.com" className="text-sm text-gray-600 hover:text-indigo-600 transition">
                  contact@portfolio5007.com
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-1">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/projects"
                className="text-sm text-gray-600 hover:text-indigo-600 transition"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-indigo-600 transition"
              >
                About Me
              </Link>
              <Link
                href="/skills"
                className="text-sm text-gray-600 hover:text-indigo-600 transition"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-indigo-600 transition"
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                download
                className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition"
              >
                <FiFileText className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition"
                aria-label="Instagram"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-2">
              <h4 className="text-sm font-medium text-gray-800">Certifications</h4>
              <div className="flex items-center mt-2">
                <FiAward className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Frontend Development</span>
              </div>
              <div className="flex items-center mt-1">
                <FiAward className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">UX/UI Design</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-800">Subscribe to Updates</h4>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="text-sm px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 flex-grow"
                />
                <button className="bg-indigo-600 text-white px-3 py-2 rounded-r-md text-sm hover:bg-indigo-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} portfolio5007. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-500 hover:text-indigo-600 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-gray-500 hover:text-indigo-600 transition"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none"
          aria-label="Back to top"
        >
          <FiArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;