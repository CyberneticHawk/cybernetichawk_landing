import { motion } from 'framer-motion';
import Link from 'next/link';

import { Section } from '../layout/Section';

const Contact = () => (
  <Section title="Contact Cybernetic Hawk">
    <div className="relative mx-auto max-w-3xl rounded-xl border border-pinkAccent/30 bg-[#111827]/80 p-8 text-center shadow-xl backdrop-blur-lg">
      {/* Balanced Pink Glow Behind */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-48 rounded-full bg-pinkAccent/20 opacity-50 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-6 text-gray-300">
          For business inquiries, partnerships, or general questions about
          Cybernetic Hawk Ltd., please get in touch below.
        </p>

        <div className="mb-6 space-y-4 text-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Business & Partnerships
            </h2>
            <p>
              <a
                href="mailto:mgmt@cybernetichawk.com"
                className="text-pinkAccent hover:underline"
                aria-label="Email Cybernetic Hawk Business & Partnerships"
              >
                mgmt@cybernetichawk.com
              </a>
            </p>
          </div>

          <div className="pt-2 text-sm leading-tight text-gray-400">
            <p>Cybernetic Hawk Ltd.</p>
            <p>86-90 Paul Street</p>
            <p>London, EC2A 4NE</p>
            <p>United Kingdom</p>
          </div>
        </div>

        <p className="text-sm text-gray-400">
          For product-specific support, please visit the product websites listed
          on our{' '}
          <Link href="/#products" scroll={false}>
            <span className="text-pinkAccent hover:underline">Products</span>
          </Link>{' '}
          section.
        </p>
      </motion.div>
    </div>
  </Section>
);

export { Contact };
