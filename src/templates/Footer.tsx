import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-brand-dark">
    {' '}
    {/* dark background tone */}
    <Section>
      <div className="text-center text-white">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <ul className="mb-4 flex justify-center space-x-6">
          <li>
            <Link href="/">
              <span className="hover:underline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#features">
              <span className="hover:underline">Features</span>
            </Link>
          </li>
          <li>
            <Link href="#portal">
              <span className="hover:underline">Portal</span>
            </Link>
          </li>
        </ul>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Attronaut. All rights reserved.
        </p>
      </div>
    </Section>
  </Background>
);

export { Footer };
