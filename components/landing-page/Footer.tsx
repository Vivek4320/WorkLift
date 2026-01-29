'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    const services = [
        'Electrician',
        'Plumber',
        'AC Repair',
        'Carpenter',
        'Cleaning'
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Service', href: '/service' },
        { name: 'Contact', href: '/contact' }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' }
    ];

    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 py-16">
                {/* Centered Brand Section */}
                <div className="flex flex-row items-center justify-center mb-12">
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-35 h-35 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/main-logo.png"
                                alt="WorkLift Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-3xl font-semibold -ml-5">
                            <span className="text-gray-800">Work</span>
                            <span className="text-sky-400">Lift</span>
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400">→</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="/service"
                                        className="text-gray-600 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400">→</span>
                                        <span>{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start space-x-3 text-gray-600 text-sm">
                                <Phone className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-600 text-sm">
                                <Mail className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                                <span>support@worklift.com</span>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-600 text-sm">
                                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                                <span>Mumbai, Maharashtra, India</span>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-sky-400 hover:text-white hover:border-sky-400 transition-all duration-300 hover:scale-110 shadow-sm"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-600 text-sm">
                            © 2026 <span className="font-semibold text-gray-800">WorkLift</span>. All rights reserved.
                        </p>

                        <div className="flex items-center space-x-6">
                            <Link href="#" className="text-gray-600 hover:text-sky-400 text-sm transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-sky-400 text-sm transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-sky-400 text-sm transition-colors duration-200">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
