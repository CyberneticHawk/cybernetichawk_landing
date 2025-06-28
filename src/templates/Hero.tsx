import { motion } from 'framer-motion';

import { Section } from '../layout/Section';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle Tech/Hawk Background contained to Hero */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/hawk-tech-bg.png')" }}
      ></div>

      <Section yPadding="pt-10 pb-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl rounded-2xl border border-pinkAccent/30 bg-[#111827]/80 px-8 py-10 shadow-xl backdrop-blur-lg"
        >
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="size-64 rounded-full bg-pinkAccent/20 opacity-60 blur-3xl"></div>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Building Bold Ideas With Vision and Precision.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Cybernetic Hawk is the nest for products ready to take flight —
            aligned by technology and strategy.
          </p>

          <div className="mx-auto mt-6 h-0.5 w-24 bg-pinkAccent/50 blur-sm"></div>
        </motion.div>
      </Section>
    </div>
  );
};

export { Hero };
