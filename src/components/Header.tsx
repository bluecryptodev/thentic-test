import React from 'react';
import Link from 'next/link';
import Logo from '~/assets/logo.svg';
import { headerNavLinks } from '@/lib/constants';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-10'>
      <div>
        <Link href='/' aria-label='test'>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>
              <Logo />
            </div>
            <div className='hidden h-6 text-2xl font-semibold sm:block'>
              Thentic-Test
            </div>
          </div>
        </Link>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'>
                {link.title}
              </a>
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
