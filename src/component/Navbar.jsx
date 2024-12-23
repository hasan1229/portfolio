import { useState } from 'react';
import pic from '../../public/photo.avif';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const NavItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Portfolio' },
    { id: 4, text: 'Experience' },
    { id: 5, text: 'Contact' },
    { id: 6, text: 'Download CV', href: '/cv.pdf', download: true },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0">
      <div className="flex justify-between items-center h-16">
        {/* Logo and Name */}
        <div className="flex space-x-2">
          <img className="h-12 w-12 rounded-full" src={pic} alt="Profile" />
          <h1 className="semibold text-xl cursor-pointer">
            Hasa<span className="text-2xl text-green-500">n</span>
            <p className="text-sm">i am web developer</p>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {NavItems.map(({ id, text, href, download }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                {href ? (
                  <a href={href} download={download || false}>
                    {text}
                  </a>
                ) : (
                  text
                )}
              </li>
            ))}
          </ul>
          {/* Hamburger Menu Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden flex">
            {menu ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div>
          <ul className="md:hidden flex h-screen flex-col items-center justify-center space-y-4 font-bold">
            {NavItems.map(({ id, text, href, download }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                {href ? (
                  <a href={href} download={download || false}>
                    {text}
                  </a>
                ) : (
                  text
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
