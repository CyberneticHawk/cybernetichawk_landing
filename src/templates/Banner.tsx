import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div className="rounded-lg bg-brand-dark p-8 text-center text-white">
      <h3 className="mb-2 text-2xl font-semibold">Navigate. Learn. Launch.</h3>
      <p className="mb-4 text-lg">
        Join the portal waitlist and be the first to access your strategic
        dashboard.
      </p>
      <Link href="#portal">
        <Button>Access the Portal</Button>
      </Link>
    </div>
  </Section>
);

export { Banner };
