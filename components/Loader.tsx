'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
    onLoadingComplete?: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2500;
        const incrementInterval = 20;
        const totalIncrements = duration / incrementInterval;
        const incrementAmount = 100 / totalIncrements;

        const progressTimer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + incrementAmount;
                if (newProgress >= 100) {
                    clearInterval(progressTimer);
                    setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(() => {
                            setIsLoading(false);
                            onLoadingComplete?.();
                        }, 500);
                    }, 200);
                    return 100;
                }
                return newProgress;
            });
        }, incrementInterval);

        return () => clearInterval(progressTimer);
    }, [onLoadingComplete]);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Logo with subtle bounce animation */}
            <div className="flex flex-col items-center">
                <div className="flex flex-col animate-gentle-bounce items-center">
                    <img
                        src="/main-logo.png"
                        alt="WorkLift Logo"
                        className="w-30 h-30 object-contain"
                    />
                    <h1 className="text-3xl font-bold text-gray-700 tracking-wide -mt-4">
                        Work<span className="text-sky-400">Lift</span>
                    </h1>
                </div>

                {/* Progress line loading */}
                <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mt-8">
                    <div
                        className="h-full bg-gradient-to-r from-sky-500 to-sky-600 rounded-full transition-all duration-200 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Progress percentage text */}
                <p className="text-sm text-gray-500 font-medium mt-2">
                    {Math.round(progress)}%
                </p>
            </div>
        </div>
    );
}
