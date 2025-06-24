import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Section } from '../layout/Section';

const ProductRow = ({
  title,
  description,
  image,
  imageAlt,
  contact,
  reverse,
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  contact: React.ReactNode;
  reverse?: boolean;
}) => {
  const rowClass = classNames(
    'mb-16 flex flex-wrap items-center justify-center sm:mb-24',
    {
      'flex-row-reverse': reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={rowClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-lg text-gray-200">{description}</p>
        <div className="mt-6 space-y-1 text-sm text-gray-300">{contact}</div>
      </div>

      {image && (
        <div className="flex w-full justify-center p-6 sm:w-1/2">
          <div className="flex h-[320px] w-full items-center justify-center">
            <img
              src={`${router.basePath}${image}`}
              alt={imageAlt || title}
              className="mx-auto max-h-[300px] rounded-lg object-contain shadow-lg ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl"
            />
          </div>
        </div>
      )}
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
      image="/assets/images/attronaut-preview.png"
      imageAlt="Attronaut Platform"
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
            <strong>General:</strong> hello@attronaut.com
          </p>
          <p>
            <strong>Support:</strong> support@attronaut.com
          </p>
          <p>
            <strong>
              Partnerships & Platform Access (OAuth, Permissions):
            </strong>{' '}
            mgmt@attronaut.com
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Attronaut is designed to support secure integration with ad
            platforms like Meta, Google, TikTok, Klaviyo, and more.
          </p>
        </>
      }
    />

    <ProductRow
      title="Artofficial Dimensions"
      description="Space-inspired home decor merging form, function, and futurism. From ambient lighting to functional art, we create products that bring the future home."
      image="/assets/images/artofficialdimensions-preview.png"
      imageAlt="Artofficial Dimensions Product"
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
            <strong>General:</strong> hello@artofficialdimensions.com
          </p>
          <p>
            <strong>Support:</strong> support@artofficialdimensions.com
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
