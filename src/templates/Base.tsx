import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Products } from './Products';

const Base = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />

    {/* 🚀 Tech Wing Divider */}
    <div className="relative py-6">
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="mx-auto h-6 w-full max-w-4xl text-white opacity-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        {/* Angular wing design */}
        <path d="M0,10 L20,4 L50,8 L80,4 L100,10" strokeDasharray="2 2" />
      </svg>

      {/* Tech-style animated blips */}
      <div className="pointer-events-none absolute left-0 top-0 flex w-full justify-between overflow-hidden">
        <div className="animate-blip">
          <div className="size-2 rounded-full bg-white shadow-md backdrop-blur-sm" />
        </div>
        <div className="animate-blip delay-500">
          <div className="size-2 rounded-full bg-white shadow-md backdrop-blur-sm" />
        </div>
      </div>

      <style jsx>{`
        .animate-blip {
          animation: flyby 6s linear infinite;
        }

        .animate-blip div {
          animation: fadeInOut 6s linear infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes flyby {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100vw);
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
