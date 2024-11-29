const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* ด้านซ้าย */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
            <p>&copy; 2024 Created with ❤️ by Milo Team</p>
          </div>
  
          {/* ด้านขวา */}
          <div className="flex space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/bmz3521"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ec4899] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1024 1024"
                fill="none"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#ec4899"
                />
              </svg>
            </a>
  
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anurak-kiwphukiaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ec4899] transition-colors duration-300"
            >
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"   // ตั้งขนาด width เป็น 1024
                    height="32"  // ตั้งขนาด height เป็น 1024
                    viewBox="7.025 7.025 497.951 497.95"
                    aria-label="LinkedIn"
                >
                    <defs>
                    <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="-974.482"
                        y1="1306.773"
                        x2="-622.378"
                        y2="1658.877"
                        gradientTransform="translate(1054.43 -1226.825)"
                    >
                        <stop offset="0" stopColor="#ec4899" />
                        <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                    </defs>
                    <path
                    d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                    fill="url(#a)"
                    />
                </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;
  