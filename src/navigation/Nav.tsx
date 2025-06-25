import Link from 'next/link';

import { Logo } from '../templates/Logo';

const Nav = () => (
  <div className="flex flex-wrap items-center justify-between py-4">
    <div>
      <Link href="/">
        <span className="cursor-pointer text-white hover:text-primary">
          <Logo />
        </span>
      </Link>
    </div>

    <nav>
      <ul className="flex items-center space-x-6 text-sm font-medium text-white sm:text-base">
        <li>
          <Link
            href="#products"
            className="transition-colors hover:text-primary"
          >
            Products
          </Link>
        </li>
        <li>
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export { Nav };
