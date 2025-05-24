"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-indigo-600 hover:text-indigo-500 transition"
            >
              <div className="relative h-8 w-8 mr-2 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507537231947-f2ff14bc1554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjN8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                  priority
                />
              </div>
              porfolio5007
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              About Me
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              My Work
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Blog
            </Link>
            <div className="flex items-center space-x-2">
              <Link href="https://github.com" aria-label="GitHub" className="text-gray-500 hover:text-indigo-600 transition">
                <FiGithub size={20} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition">
                <FiLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition">
                <FiTwitter size={20} />
              </Link>
            </div>
            <Link
              href="/contact"
              className="flex items-center bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <FiMail className="mr-2" />
              Contact Me
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link
              href="/about"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={toggleMenu}
            >
              My Work
            </Link>
            <Link
              href="/services"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Link href="https://github.com" aria-label="GitHub" className="text-gray-500 hover:text-indigo-600 transition">
                <FiGithub size={20} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition">
                <FiLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition">
                <FiTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;