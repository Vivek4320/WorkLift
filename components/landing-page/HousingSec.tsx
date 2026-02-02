'use client';

export default function Housing() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center">
                    For Housing And Societies
                </h2>
                <div className="mb-6 sm:mb-8 md:mb-10 w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-sky-500 to-sky-500 rounded-full" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gray-200 flex items-center justify-center">
                    </div>

                    {/* Card 2 */}
                    <div className="h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gray-200 flex items-center justify-center">
                        
                    </div>

                    {/* Card 3 */}
                    <div className="h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gray-200 flex items-center justify-center">
                        
                    </div>

                    {/* Card 4 */}
                    <div className="h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gray-200 flex items-center justify-center">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}