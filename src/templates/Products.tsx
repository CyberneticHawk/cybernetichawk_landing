import classNames from 'classnames';

import { Section } from '../layout/Section';

const ProductRow = ({
  title,
  description,
  contact,
  reverse,
}: {
  title: string;
  description: string;
  contact: React.ReactNode;
  reverse?: boolean;
}) => {
  const rowClass = classNames(
    'mb-16 flex flex-wrap items-center justify-center sm:mb-24',
    {
      'flex-row-reverse': reverse,
    },
  );

  return (
    <div className={rowClass}>
      <div className="w-full text-center sm:w-2/3 sm:px-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-lg text-gray-200">{description}</p>
        <div className="mt-6 space-y-1 text-sm text-gray-300">{contact}</div>
      </div>
    </div>
  );
};

const Products = () => (
  <Section
    id="products"
    bgColor="bg-[#0B101B]"
    title="Products. Platforms. Possibilities."
    description="Cybernetic Hawk supports technology and design that push boundaries — from growth platforms to space-inspired consumer products."
  >
    <ProductRow
      title="Attronaut"
      description="A B2B SaaS platform helping Shopify retailers decode attribution and guide their growth. Attronaut provides the tools to track, optimize, and steer confidently through the evolving ad ecosystem."
      contact={
        <>
          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://attronaut.com"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              attronaut.com
            </a>
          </p>
          <p>
            <strong>General:</strong>{' '}
            <a
              href="mailto:hello@attronaut.com"
              className="underline hover:text-white"
            >
              hello@attronaut.com
            </a>
          </p>
          <p>
            <strong>Support:</strong>{' '}
            <a
              href="mailto:support@attronaut.com"
              className="underline hover:text-white"
            >
              support@attronaut.com
            </a>
          </p>
          <p>
            <strong>
              Partnerships & Platform Access (OAuth, Permissions):
            </strong>{' '}
            <a
              href="mailto:mgmt@attronaut.com"
              className="underline hover:text-white"
            >
              mgmt@attronaut.com
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Attronaut is designed to support secure integration with ad
            platforms like Meta, Google, TikTok, Klaviyo, and more.
          </p>
        </>
      }
    />

    <ProductRow
      title="ArtOfficial Dimensions"
      description="Space-inspired home decor merging form, function, and futurism. From ambient lighting to functional art, we create products that bring the future home."
      contact={
        <>
          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://artofficialdimensions.com"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              artofficialdimensions.com
            </a>
          </p>
          <p>
            <strong>General:</strong>{' '}
            <a
              href="mailto:hello@artofficialdimensions.com"
              className="underline hover:text-white"
            >
              hello@artofficialdimensions.com
            </a>
          </p>
          <p>
            <strong>Support:</strong>{' '}
            <a
              href="mailto:support@artofficialdimensions.com"
              className="underline hover:text-white"
            >
              support@artofficialdimensions.com
            </a>
          </p>
        </>
      }
      reverse
    />

    {/* Divider */}
    <div className="relative mt-12">
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="mx-auto h-6 w-full max-w-4xl rotate-180 text-white opacity-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="3 2"
      >
        <path d="M0,10 Q50,0 100,10" />
      </svg>
    </div>
  </Section>
);

export { Products };
