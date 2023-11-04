import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

const Navbar = () => {
  const links = [
    { label: 'Dashboard', href: '/', key: 1 },
    { label: 'Issues', href: '/issues', key: 2 },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 hover:font-medium transition-colors"
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
