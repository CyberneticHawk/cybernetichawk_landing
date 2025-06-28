import { motion } from 'framer-motion';

import { Section } from '../layout/Section';

const About = () => (
  <Section id="about" bgColor="bg-[#0B101B]" title="About Cybernetic Hawk">
    <div className="relative mx-auto max-w-3xl rounded-xl border border-pinkAccent/30 bg-[#111827]/80 p-8 text-center shadow-xl backdrop-blur-lg">
      {/* Balanced Pink Glow Behind */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-40 rounded-full bg-pinkAccent/20 opacity-40 blur-2xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-6 text-lg text-gray-300">
          Cybernetic Hawk builds and supports ideas that fuse technology,
          creativity, and culture — always with a view to the future.
        </p>
        <p className="text-lg text-gray-300">
          From software to space-inspired design to creative expression — our
          work explores new terrain, grounded by bold thinking and technical
          precision.
        </p>

        {/* Subtle Divider */}
        <div className="mx-auto mt-6 h-0.5 w-24 bg-pinkAccent/50 blur-sm"></div>
      </motion.div>
    </div>
  </Section>
);

export { About };
