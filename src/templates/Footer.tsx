import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => {
  const router = useRouter();
  const isAboutPage = router.pathname === '/about';

  return (
    <Background color="bg-brand-dark">
      <Section>
        <div className="text-center text-white">
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>

          <ul className="mb-4 flex justify-center space-x-6 text-sm sm:text-base">
            <li>
              <Link href="/">
                <span className="hover:shadow-accent/70 rounded px-2 py-1 transition hover:underline hover:shadow-[0_0_8px]">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href={isAboutPage ? '/#products' : '#products'}>
                <span className="hover:shadow-accent/70 rounded px-2 py-1 transition hover:underline hover:shadow-[0_0_8px]">
                  Products
                </span>
              </Link>
            </li>
            <li>
              {isAboutPage ? (
                <span className="text-gray-400">About</span>
              ) : (
                <Link href="/about">
                  <span className="hover:shadow-accent/70 rounded px-2 py-1 transition hover:underline hover:shadow-[0_0_8px]">
                    About
                  </span>
                </Link>
              )}
            </li>
            <li>
              <a href="mailto:mgmt@cybernetichawk.com">
                <span className="hover:shadow-accent/70 rounded px-2 py-1 transition hover:underline hover:shadow-[0_0_8px]">
                  Contact
                </span>
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
};

export { Footer };
