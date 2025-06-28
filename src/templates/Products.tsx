import { motion } from 'framer-motion';

import { Section } from '../layout/Section';

const products = [
  {
    title: 'Attronaut',
    description:
      'A B2B platform helping Shopify brands decode attribution and grow with clarity. Attronaut works behind the scenes to track performance, connect the dots, and guide better decisions.',
    website: 'https://attronaut.com',
    contacts: [
      { label: 'General', email: 'hello@attronaut.com' },
      { label: 'Support', email: 'support@attronaut.com' },
      { label: 'Partnerships & Access', email: 'mgmt@attronaut.com' },
    ],
    note: 'Attronaut is designed to support secure integration with ad platforms like Meta, Google, TikTok, Klaviyo, and more.',
  },
  {
    title: 'ArtOfficialDimensions',
    description:
      'Space-inspired home decor merging form, function, and futurism. From ambient lighting to functional art, we create products that bring the future home.',
    website: 'https://artofficialdimensions.com',
    contacts: [
      { label: 'General', email: 'hello@artofficialdimensions.com' },
      { label: 'Support', email: 'support@artofficialdimensions.com' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Products = () => (
  <Section
    id="products"
    yPadding="pt-10 pb-6"
    title="Products. Platforms. Possibilities."
  >
    <div className="relative z-10 text-center">
      <div className="mx-auto mb-6 mt-2 h-0.5 w-20 bg-pinkAccent/50 blur-sm"></div>

      <div className="grid gap-8 sm:grid-cols-2">
        {products.map((product, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-xl border border-gray-700 bg-[#111827]/80 p-6 text-center shadow-lg backdrop-blur-lg transition hover:scale-[1.04] hover:border-pinkAccent hover:bg-[#151b29] hover:shadow-2xl hover:ring-2 hover:ring-pinkAccent/40"
          >
            {/* Subtle Glow Behind Card */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="size-64 rounded-full bg-pinkAccent/20 opacity-40 blur-3xl"></div>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-white transition group-hover:text-pinkAccent">
              {product.title}
            </h3>
            <p className="mb-4 text-gray-300">{product.description}</p>

            <div className="mx-auto mb-4 max-w-xs space-y-1 text-left text-sm text-gray-300">
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href={product.website}
                  className="break-all underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.website.replace('https://', '')}
                </a>
              </p>
              {product.contacts.map((contact, idx) => (
                <p key={idx}>
                  <strong>{contact.label}:</strong>{' '}
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all underline hover:text-white"
                  >
                    {contact.email}
                  </a>
                </p>
              ))}
            </div>

            {product.note && (
              <p className="mx-auto mt-2 max-w-xs text-left text-xs text-gray-400">
                {product.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export { Products };
