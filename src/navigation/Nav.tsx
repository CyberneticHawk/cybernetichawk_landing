import Link from 'next/link';

import { Logo } from '../templates/Logo';

const Nav = () => (
  <header className="flex flex-col py-4">
    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/" scroll={false}>
          <span className="cursor-pointer text-white transition-colors hover:text-pinkAccent">
            <Logo />
          </span>
        </Link>
      </div>

      <nav>
        <ul className="flex items-center space-x-6 text-sm font-medium text-white sm:text-base">
          <li>
            <Link href="/#products" scroll={false}>
              <span className="rounded px-2 py-1 underline-offset-4 transition-colors hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                Products
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" scroll={false}>
              <span className="rounded px-2 py-1 underline-offset-4 transition-colors hover:text-pinkAccent hover:underline hover:shadow-[0_0_8px] hover:shadow-pinkAccent/70">
                About
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Circuit-Inspired Divider */}
    <div className="relative mx-auto mt-2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <svg
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        className="mx-auto h-2 w-full text-pinkAccent opacity-30"
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
