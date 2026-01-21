'use client';

const steps = [
  {
    title: 'Book',
    icon: '📅',
    shape: '/shapes/shape-dark.png',
  },
  {
    title: 'Worker',
    icon: '👷',
    shape: '/shapes/shape-light.png',
  },
  {
    title: 'Task',
    icon: '📋',
    shape: '/shapes/shape-dark.png',
  },
  {
    title: 'Pay',
    icon: '💳',
    shape: '/shapes/shape-light.png',
  },
  {
    title: 'Trust',
    icon: '🛡️',
    shape: '/shapes/shape-dark.png',
  },
];

export default function ServiceFlow() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Steps */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:flex-nowrap">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center gap-6">
              
              {/* Shape Card */}
              <div className="relative h-36 w-36">
                <img
                  src={step.shape}
                  alt={step.title}
                  className="h-full w-100 object-contain"
                />

                {/* Icon - Top Right */}
                <div className="absolute top-4 right-4 text-4xl">
                  {step.icon}
                </div>

                {/* Centered Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white mr-10">
                    {step.title}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block text-gray-400 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Simple. Transparent. Reliable.
          </h2>

          <p className="mt-4 text-gray-500">
            Electrician • Plumber • AC Repair • Carpenter • Cleaning
          </p>
        </div>

      </div>
    </section>
  );
}
