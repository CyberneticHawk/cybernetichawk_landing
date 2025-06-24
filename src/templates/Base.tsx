import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Products } from './Products';

const Base = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />

    {/* 🚀 Animated Orbit Divider */}
    <div className="relative py-6">
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="mx-auto h-6 w-full max-w-4xl text-white opacity-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="3 2"
      >
        <path d="M0,10 Q50,0 100,10" />
      </svg>

      {/* Animated blip */}
      <div className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden">
        <div className="animate-flyby">
          <div className="size-2 rounded-full bg-white opacity-0 shadow-sm" />
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-flyby {
          position: absolute;
          animation: orbitLoop 8s ease-in-out infinite;
        }

        .animate-flyby div {
          animation: fadeInOut 8s ease-in-out infinite;
        }

        @keyframes orbitLoop {
          0% {
            transform: translateX(0%) translateY(0px);
          }
          50% {
            transform: translateX(50vw) translateY(-6px);
          }
          100% {
            transform: translateX(100vw) translateY(0px);
          }
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>

    <Products />
    <Footer />
  </div>
);

export { Base };
