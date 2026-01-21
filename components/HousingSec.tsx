'use client';

export default function Housing() {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
                <span className="text-6xl font-bold mb-8 text-gray-800">For Housing And Societe</span>
                <div className="mb-10 w-40 h-1 bg-gradient-to-r from-sky-500 to-sky-500 rounded-full" />
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-row overflow-x-auto px-4 gap-4">
                    <div className="h-80 w-77 rounded-4xl bg-gray-200 m-4 flex items-center justify-center">
                    </div>
                    <div className="h-80 w-77 rounded-4xl bg-gray-200 m-4 flex items-center justify-center">
                    </div>
                    <div className="h-80 w-77 rounded-4xl bg-gray-200 m-4 flex items-center justify-center">
                    </div>
                    <div className="h-80 w-77 rounded-4xl bg-gray-200 m-4 flex items-center justify-center">
                    </div>
                </div>
            </div>
        </section>
    );
}