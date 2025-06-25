import Link from 'next/link';

import { Logo } from '../templates/Logo';

const Nav = () => (
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
            className="hover:text-accent after:bg-accent relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:text-accent after:bg-accent relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export { Nav };
