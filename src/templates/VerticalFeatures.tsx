import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Section } from '../layout/Section';

const VerticalFeatureRow = ({
  title,
  description,
  image,
  imageAlt,
  reverse,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) => {
  const verticalFeatureClass = classNames(
    'mb-16 flex flex-wrap items-center justify-center sm:mb-24',
    {
      'flex-row-reverse': reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-lg text-gray-200">{description}</p>
      </div>

      <div className="flex w-full justify-center p-6 sm:w-1/2">
        <div className="flex h-[320px] w-full items-center justify-center">
          <img
            src={`${router.basePath}${image}`}
            alt={imageAlt}
            className="mx-auto max-h-[300px] rounded-lg object-contain shadow-lg ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

const VerticalFeatures = () => (
  <Section
    id="features"
    bgColor="bg-[#0B101B]"
    title="Why Brands Trust Attronaut to Guide Their Growth"
    description="Attronaut is more than a dashboard — it's your gateway to strategic clarity. Designed to cut through noise and recommend what to launch, pause, or scale."
  >
    <VerticalFeatureRow
      title="Chart Spend. Track Revenue"
      description="Trace every marketing spend to the revenue it generates. Attronaut illuminates which campaigns truly fuel growth, so you can allocate your budget with pinpoint precision and confidence."
      image="/assets/images/feature-1.png"
      imageAlt="Campaign ROI"
    />
    <VerticalFeatureRow
      title="Cut Through the Static. Find Signal."
      description="Attronaut filters out data noise to isolate true performance signals. No more guesswork—just crystal-clear insight into what drives growth, so you can act swiftly and decisively."
      image="/assets/images/feature-2.png"
      imageAlt="Attribution dashboard"
      reverse
    />
    <VerticalFeatureRow
      title="Dock Fast. Deploy Smarter."
      description="Connect your Shopify store effortlessly and launch into insights without delay. Attronaut’s seamless Shopify integration gets you up and orbiting with actionable data in minutes, not weeks."
      image="/assets/images/feature-3.png"
      imageAlt="Shopify integration"
    />
    <VerticalFeatureRow
      title="Data Alone Doesn’t Steer. Guidance Does."
      description="Attronaut goes beyond reporting to provide actionable guidance. Like a marketing co-pilot, it highlights what to launch, pause, or scale, keeping your strategy on an optimal trajectory toward ROI."
      image="/assets/images/feature-4.png"
      imageAlt="Revenue growth"
      reverse
    />
    {/* 🌙 Inverted Orbit Divider */}
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

export { VerticalFeatures };
