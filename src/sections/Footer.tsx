import Logo from '@/assets/logo.svg';
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 ">
      <div className="container">
        <div className="flex flex-col lg:items-center gap-8 lg:flex-row">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div>AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 text-white/70 text-xs md:text-sm lg:justify-center">
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Developers
            </a>
            <a href="#" className="hover:text-white">
              Company
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
            <a href="#" className="hover:text-white">
              Changelog
            </a>
          </nav>

          <div className="flex gap-5 text-white/70 text-xs  lg:flex-1 lg:justify-end">
            <XSocial className="hover:text-white transition" />
            <InstaSocial className="hover:text-white transition" />
            <YTSocial className="hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
