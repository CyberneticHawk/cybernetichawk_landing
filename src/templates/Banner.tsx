import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div className="rounded-lg bg-brand-dark p-8 text-center text-white">
      <h3 className="mb-2 text-2xl font-semibold">Fueling Bold Ideas.</h3>
      <p className="mb-4 text-lg">
        Products built to push boundaries — through technology and design.
      </p>
    </div>
  </Section>
);

export { Banner };
