import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-brand-dark">
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
            <Link href="#products">
              <span className="hover:underline">Products</span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span className="hover:underline">About</span>
            </Link>
          </li>
          <li>
            <a href="mailto:mgmt@cybernetichawk.com">
              <span className="hover:underline">Contact</span>
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Cybernetic Hawk Ltd. All rights
          reserved.
        </p>
      </div>
    </Section>
  </Background>
);

export { Footer };
