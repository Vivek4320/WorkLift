'use client';

import React from 'react';
import Image from 'next/image';

interface ServiceOffer {
    id: number;
    title: string;
    image: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number;
}

const ResentOffers: React.FC = () => {
    const offers: ServiceOffer[] = [
        {
            id: 1,
            title: 'Electrician',
            image: '/images/electrician.jpg',
            originalPrice: 200,
            discountedPrice: 160,
            discount: 20,
        },
        {
            id: 2,
            title: 'Mechanic',
            image: '/images/mechanic.jpg',
            originalPrice: 450,
            discountedPrice: 300,
            discount: 25,
        },
        {
            id: 3,
            title: 'Plumber',
            image: '/images/plumber.jpg',
            originalPrice: 300,
            discountedPrice: 270,
            discount: 10,
        },
        {
            id: 4,
            title: 'Carpenter',
            image: '/images/carpenter.jpg',
            originalPrice: 500,
            discountedPrice: 375,
            discount: 10,
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-sky-50 to-sky-50">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-2 text-slate-900 tracking-tight">
                        Resent Offers
                    </h1>
                    <div className="mb-10 w-40 h-1 bg-gradient-to-r from-sky-500 to-sky-500 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer, index) => (
                        <div
                            key={offer.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Discount Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <div className="relative">
                                    <div className="bg-white rounded-full shadow-lg px-3 py-3 transform -rotate-10 group-hover:rotate-0 transition-transform duration-300">
                                        <div className="text-center">
                                            <span className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
                                                Flat
                                            </span>
                                            <span className="block text-2xl font-bold text-red-500">
                                                {offer.discount}%
                                            </span>
                                            <span className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">
                                                off
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                                {/* Placeholder for image - replace with actual Next.js Image component */}
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-200 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-slate-400 text-sm font-medium">
                                        {offer.title} Image
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3 capitalize">
                                    {offer.title}
                                </h3>

                                <div className="flex items-center gap-3">
                                    <span className="text-lg text-slate-400 line-through font-medium">
                                        ₹{offer.originalPrice}
                                    </span>
                                    <span className="text-3xl font-bold text-sky-400">
                                        ₹{offer.discountedPrice}
                                    </span>
                                </div>

                                {/* Hover Effect Bar */}
                                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-sky-500 to-sky-500 group-hover:w-full transition-all duration-500 rounded-full" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResentOffers;