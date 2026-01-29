'use client';

import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, CheckCircle, Zap, Clock } from 'lucide-react';

const ServicePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Electrician');

    const services = {
        'Electrician': [
            { title: 'Electrical Wiring & Repair', rating: '4.9', bookings: '2,450', price: '₹299', tags: ['Available Today', 'Verified Pro'] },
            { title: 'Fan & Light Installation', rating: '4.8', bookings: '1,890', price: '₹199', tags: ['Same Day Service'] },
            { title: 'Switchboard Repair', rating: '4.7', bookings: '1,230', price: '₹399', tags: ['Emergency Available'] }
        ],
        'Plumber': [
            { title: 'Leaky Faucet Repair', rating: '4.8', bookings: '1,500', price: '₹199', tags: ['Available Today'] },
            { title: 'Pipe Fitting & Installation', rating: '4.7', bookings: '1,200', price: '₹499', tags: ['Verified Pro'] }
        ],
        'AC Repair': [
            { title: 'AC Service & Cleaning', rating: '4.9', bookings: '3,000', price: '₹599', tags: ['Summer Special'] },
            { title: 'Gas Charging', rating: '4.8', bookings: '2,100', price: '₹2499', tags: ['Warranty Included'] }
        ],
        'Painter': [
            { title: 'Full Home Painting', rating: '4.7', bookings: '800', price: '₹4999', tags: ['Free Consultation'] },
            { title: 'Wall Texture Design', rating: '4.8', bookings: '650', price: '₹1499', tags: ['New Patterns'] }
        ],
        'Cleaner': [
            { title: 'Full Home Deep Cleaning', rating: '4.9', bookings: '4,100', price: '₹1999', tags: ['Best Seller'] },
            { title: 'Bathroom Cleaning', rating: '4.8', bookings: '2,300', price: '₹499', tags: ['Eco-friendly'] }
        ]
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-[#f0f4f8] to-[#e2e8f0] px-4 sm:px-6 md:px-8 py-8 sm:py-12 flex flex-col items-center gap-6 sm:gap-8">
            {/* Search Section */}
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-3 sm:p-4 flex md:flex-row flex-col gap-3 sm:gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    {/* Search Input */}
                    <div className="flex-1 flex items-center gap-3 px-3 py-2 md:border-r border-gray-200 md:border-b-0 border-b md:pb-0 pb-2">
                        <Search className="text-gray-400 shrink-0" size={20} />
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border-none outline-none text-sm sm:text-base w-full text-gray-800 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Location Input */}
                    <div className="flex items-center gap-2 px-3 py-2 min-w-0 sm:min-w-40 md:min-w-48 md:border-r border-gray-200 md:border-b-0 border-b md:pb-0 pb-2">
                        <MapPin className="text-gray-400 shrink-0" size={20} />
                        <input
                            type="text"
                            placeholder="Your location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border-none outline-none text-sm sm:text-base w-full text-gray-800 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Filter Button */}
                    <div className="flex items-center justify-center px-2 py-2 md:border-b-0 border-b border-gray-200 md:pb-0 pb-2 cursor-pointer group">
                        <div className="p-2 w-10 h-10 rounded-full hover:bg-blue-50 transition-colors">
                            <Filter className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="bg-linear-to-br from-sky-400 to-sky-600 hover:from-sky-400 hover:to-sky-400 text-white border-none rounded-xl px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:translate-y-0 w-full sm:w-auto">
                        Search
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full max-w-4xl mt-2 sm:mt-4">
                {[
                    { name: 'Painter', icon: '🎨' },
                    { name: 'AC Repair', icon: '❄️' },
                    { name: 'Electrician', icon: '⚡' },
                    { name: 'Plumber', icon: '💧' },
                    { name: 'Cleaner', icon: '🧹' }
                ].map((cat, idx) => {
                    const isActive = selectedCategory === cat.name;
                    return (
                        <div
                            key={idx}
                            onClick={() => setSelectedCategory(cat.name)}
                            className="flex flex-col items-center gap-2 cursor-pointer group"
                        >
                            <div className={`w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${isActive ? 'bg-sky-200 scale-110' : 'bg-gray-50 hover:bg-gray-100 hover:scale-105'}`}>
                                {cat.name === 'Electrician' && isActive ? <span>⚡</span> : cat.icon}
                            </div>
                            <span className={`text-xs sm:text-sm font-medium text-center ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                {cat.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Services List */}
            <div className="w-full max-w-4xl mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6">
                <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800">Showing {selectedCategory} services</h2>

                {(services[selectedCategory as keyof typeof services] || []).map((service, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex md:flex-row flex-col items-start md:items-center justify-between gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                        {/* Background linear accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-sky-50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        
                        <div className="flex-1 z-10 w-full">
                            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                                <h3 className="text-gray-900 text-lg sm:text-xl md:text-2xl font-bold">{service.title}</h3>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full">
                                    <Star className="text-amber-400 fill-amber-400" size={16} />
                                    <span className="text-amber-900 font-semibold text-xs sm:text-sm">{service.rating}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{service.bookings} bookings</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="bg-linear-to-r from-blue-50 to-sky-50 text-blue-700 text-xs px-3 py-1 sm:py-1.5 rounded-full border border-blue-200 font-medium hover:border-blue-300 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-3 w-full md:w-auto md:min-w-40 z-10">
                            <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                                <span className="text-xs text-gray-500 font-medium">Starting from</span>
                                <span className="bg-linear-to-r from-amber-300 to-amber-400 text-gray-900 font-bold px-4 sm:px-6 py-1.5 rounded-full text-base sm:text-lg shadow-[0_4px_12px_rgba(217,119,6,0.2)] w-full md:w-auto text-center">
                                    {service.price}
                                </span>
                            </div>
                            <button className="cursor-pointer bg-linear-to-r from-sky-400 to-sky-500 text-white font-semibold px-4 sm:px-6 py-2.5 rounded-full text-sm w-full md:w-auto hover:from-sky-500 hover:to-sky-600 hover:shadow-[0_8px_20px_rgba(56,189,248,0.3)] active:scale-95 transition-all duration-200">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
