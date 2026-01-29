'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, History, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { id: 1, title: 'Electrician', icon: '⚡' },
    { id: 2, title: 'Plumber', icon: '💧' },
    { id: 3, title: 'AC Repair', icon: '❄️' },
    { id: 4, title: 'Painter', icon: '🎨' },
    { id: 5, title: 'Cleaner', icon: '🧹' },
    { id: 6, title: 'Carpenter', icon: '🔨' },
  ];

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserDropdownOpen && !target.closest('.user-dropdown-container')) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserDropdownOpen]);

  const navLinkClass =
    'relative text-gray-700 font-medium transition-all duration-300 hover:text-sky-400 ' +
    'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 ' +
    'after:transition-all after:duration-300 hover:after:w-full';

  const navHomeLInkClass =
    'relative text-sky-400 font-medium transition-all duration-300 ' +
    'after:transition-all after:duration-300';

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/main-logo.png"
                  alt="WorkLift Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-semibold">
                <span className="text-gray-800 -ml-3">Work</span>
                <span className="text-sky-400">Lift</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navHomeLInkClass}>Home</Link>
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/service" className={navLinkClass}>Service</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
          </div>

          {/* Search & Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group mr-5">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                className="w-70 pl-10 pr-4 py-2 bg-gray-100 rounded-full text-gray-700
                           placeholder-gray-500 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-400
                           focus:bg-white focus:shadow-lg hover:bg-gray-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400" />

              {/* Desktop Suggestions Dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 w-80 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {filteredSuggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSearchSelect(suggestion.title)}
                      className="w-full px-4 py-3 flex items-center gap-3 text-left text-gray-700 hover:bg-blue-50 transition-colors duration-200 border-b last:border-b-0"
                    >
                      <span className="text-xl">{suggestion.icon}</span>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{suggestion.title}</p>
                        <p className="text-xs text-gray-500">Browse {suggestion.title.toLowerCase()} services</p>
                      </div>
                      <Search className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* History */}
            <button
              className="p-2 rounded-full transition-all duration-300
                         hover:bg-blue-50 hover:scale-110 hover:shadow-md"
            >
              <History className="w-6 h-6 text-gray-600 transition-colors duration-300 hover:text-blue-400" />
            </button>

            {/* User */}
            <div className="relative user-dropdown-container">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="p-2 rounded-full transition-all duration-300
                           hover:bg-blue-50 hover:scale-110 hover:shadow-md"
              >
                <User className="w-6 h-6 text-gray-600 transition-colors duration-300 hover:text-blue-400" />
              </button>

              {/* User Dropdown */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden relative -top-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => setShowSuggestions(searchQuery.length > 0)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            {/* Mobile Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {filteredSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSearchSelect(suggestion.title)}
                    className="w-full px-4 py-3 flex items-center gap-3 text-left text-gray-700 hover:bg-blue-50 transition-colors duration-200 border-b last:border-b-0"
                  >
                    <span className="text-xl">{suggestion.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{suggestion.title}</p>
                      <p className="text-xs text-gray-500">Browse {suggestion.title.toLowerCase()} services</p>
                    </div>
                    <Search className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Backdrop Blur Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-md md:hidden"
            onClick={toggleMenu}
            style={{ top: '80px', zIndex: 40 }}
          />
        )}

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 bottom-0 bg-white animate-fadeIn overflow-auto"
            style={{ top: '80px', zIndex: 50 }}
          >
            <div className="flex flex-col space-y-3 p-6">
              {['Home', 'About', 'Service', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="px-4 py-2 text-gray-700 rounded-lg font-medium transition-all duration-300
                             hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1"
                >
                  {item}
                </Link>
              ))}

              {/* Mobile Icons */}
              <div className="flex items-center space-x-4 pt-4">
                <button className="p-2 rounded-full hover:bg-blue-50 transition-all duration-300">
                  <History className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                </button>
                <div className="relative user-dropdown-container">
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="p-2 rounded-full hover:bg-blue-50 transition-all duration-300"
                  >
                    <User className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                  </button>

                  {/* Mobile User Dropdown */}
                  {isUserDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => { setIsUserDropdownOpen(false); toggleMenu(); }}
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => { setIsUserDropdownOpen(false); toggleMenu(); }}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;