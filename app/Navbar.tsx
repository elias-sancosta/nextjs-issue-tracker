'use client';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/', key: 1 },
    { label: 'Issues', href: '/issues/list', key: 2 },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            className={classNames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
