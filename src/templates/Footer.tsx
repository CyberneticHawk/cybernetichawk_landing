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

          <ul className="mb-4 flex flex-wrap justify-center space-x-6 text-sm sm:text-base">
            <li>
              <Link href="/" scroll={false}>
                <span className="rounded px-2 py-1 transition hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={isAboutPage ? '/#products' : '#products'}
                scroll={false}
              >
                <span className="rounded px-2 py-1 transition hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                  Products
                </span>
              </Link>
            </li>
            <li>
              {isAboutPage ? (
                <span className="text-gray-400">About</span>
              ) : (
                <Link href="/about" scroll={false}>
                  <span className="rounded px-2 py-1 transition hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                    About
                  </span>
                </Link>
              )}
            </li>
            <li>
              <Link href="/contact" scroll={false}>
                <span className="rounded px-2 py-1 transition hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" scroll={false}>
                <span className="rounded px-2 py-1 transition hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                  Privacy Policy
                </span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" scroll={false}>
                <span className="rounded px-2 py-1 transition hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                  Terms of Use
                </span>
              </Link>
            </li>
          </ul>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cybernetic Hawk Ltd. All rights
            reserved. Registered in the United Kingdom.
          </p>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
