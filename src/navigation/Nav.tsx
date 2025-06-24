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
      <ul className="flex items-center text-xl font-medium text-white">
        <li>
          <Link
            href="#features"
            className="transition-colors hover:text-primary"
          >
            Features
          </Link>
        </li>
        <li className="ml-6">
          <Link href="#portal" className="transition-colors hover:text-primary">
            Portal
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export { Nav };
