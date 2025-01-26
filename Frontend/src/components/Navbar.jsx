import { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import banner from '../assets/banner.png';

function Navbar() {
  const { t } = useTranslation();
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [sticky, setSticky] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [theme, element]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      {['Home', 'Meeting', 'Contact', 'About', 'Registration', 'Syllabus'].map((item) => {
        const path = `/${item.toLowerCase()}`;
        const isActive = window.location.pathname === path;

        return (
          <li key={item}>
            <a
              href={path}
              className={`text-cyan-400 hover:text-cyan-600 duration-200 ${
                isActive ? 'bg-cyan-600 text-white rounded-md px-2 py-1' : ''
              }`}
            >
              {t(item)}
            </a>
          </li>
        );
      })}
    </>
  );

  const handleSearch = (query) => {
    if (query.trim()) {
      const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(searchURL, '_blank');
    }
  };

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? 'sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 transition-all ease-in-out'
          : 'dark:bg-slate-800 dark:text-white'
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-900"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer flex items-center gap-2">
            <img src={banner} alt="logo" className="h-8 w-8 object-cover" />
            <span className="text-yellow-500">{t('AGS')}</span>
          </a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 dark:bg-slate-900"
                placeholder={t('Search')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(e.target.value);
                  }
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="swap swap-rotate"
          >
            <svg
              className={`swap-${theme === 'dark' ? 'off' : 'on'} fill-current w-7 h-7`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {theme === 'dark' ? (
                <path d="M5.64,17l-.71.71a1,1,0,1,0,1.41,1.41l.71-.71a1,1,0,0,0-1.41-1.41Z" />
              ) : (
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8..." />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
