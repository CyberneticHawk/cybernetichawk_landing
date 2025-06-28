import { motion } from 'framer-motion';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Nav } from '../navigation/Nav';

const Hero = () => {
  return (
    <Background color="bg-brand-dark relative overflow-hidden">
      <Section yPadding="py-4">
        <Nav />
      </Section>

      <Section yPadding="pt-10 pb-6 text-center relative">
        {/* Feature Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-accent/30 relative z-10 mx-auto max-w-2xl rounded-2xl border bg-[#111827]/80 px-8 py-10 shadow-xl backdrop-blur-lg"
        >
          {/* Glow Accent Behind */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="bg-accent/20 size-64 rounded-full opacity-60 blur-3xl"></div>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Building Bold Ideas With Vision and Precision.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Cybernetic Hawk is the nest for products ready to take flight —
            aligned by technology and strategy.
          </p>

          {/* Subtle Divider */}
          <div className="bg-accent/50 mx-auto mt-6 h-0.5 w-24 blur-sm"></div>
        </motion.div>
      </Section>
    </Background>
  );
};

export { Hero };
