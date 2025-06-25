import Link from 'next/link';

import { Logo } from '../templates/Logo';

const Nav = () => (
  <header className="flex flex-col">
    <div className="flex flex-wrap items-center justify-between py-4">
      <div>
        <Link href="/">
          <span className="hover:text-accent cursor-pointer text-white transition-colors">
            <Logo />
          </span>
        </Link>
      </div>

      <nav>
        <ul className="flex items-center space-x-6 text-sm font-medium text-white sm:text-base">
          <li>
            <Link
              href="#products"
              className="hover:text-accent underline-offset-4 transition-colors hover:underline"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent underline-offset-4 transition-colors hover:underline"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Circuit-Inspired Divider */}
    <div className="relative mt-2">
      <svg
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        className="text-accent mx-auto h-2 w-full opacity-30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <line x1="0" y1="1" x2="100" y2="1" />
        <circle cx="20" cy="1" r="0.5" />
        <circle cx="50" cy="1" r="0.5" />
        <circle cx="80" cy="1" r="0.5" />
      </svg>
    </div>
  </header>
);

export { Nav };
