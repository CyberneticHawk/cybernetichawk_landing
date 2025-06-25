import Link from 'next/link';

import { Logo } from '../templates/Logo';

const Nav = () => (
  <div className="flex flex-col">
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
              className="hover:text-accent transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-accent transition-colors">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Divider under entire nav */}
    <div className="bg-accent h-0.5 w-full opacity-30" />
  </div>
);

export { Nav };
