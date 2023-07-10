import { Link, useLocation } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="shadow-md">
      <nav className="bg-white border-gray-200 px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={'/'} className="flex items-center">
            <img
              src={
                'https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.png'
              }
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-primary-600">
              LOGO
            </span>
          </Link>

          <div className="flex items-center order-2">
            <Button variant="filled" className="normal-case w-24 rounded-md">
              Login
            </Button>
          </div>

          <div className="flex w-auto items-center order-1" id="mobile-menu-2">
            <ul className="flex font-medium flex-row space-x-8 mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3 bg-primary-500 bg-transparent  dark:text-white border-primary-500 ${
                    pathname === '/'
                      ? 'border-b-2 text-primary-500'
                      : 'text-gray-900'
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/tracking'}
                  className={`block py-2 pr-4 pl-3 bg-primary-500 bg-transparent  dark:text-white border-primary-500 ${
                    pathname === '/tracking'
                      ? 'border-b-2 text-primary-500'
                      : 'text-gray-900'
                  }`}
                >
                  Tracking
                </Link>
              </li>
              <li>
                <Link
                  to={'/contact-us'}
                  className={`block py-2 pr-4 pl-3 bg-primary-500 bg-transparent  dark:text-white border-primary-500 ${
                    pathname === '/contact-us'
                      ? 'border-b-2 text-primary-500'
                      : 'text-gray-900'
                  }`}
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
