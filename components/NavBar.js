export function NavBar({ currentPage }) {
    const isActive = (page) => {
      return page === currentPage ? 'text-blue-500' : 'text-white';
    };
  
    return (
      <div className="flex justify-evenly p-5 bg-[#161616]">
        <h1 className="text-white">KCN</h1>
        <ul className="flex items-center">
          <li className="flex justify-evenly gap-8 text-xs md:text-base">
            <p>
              <a href="/" className={`${isActive('/')}`}>
                WRITE-UPS
              </a>
            </p>
            <p>
              <a href="/about" className={`${isActive('/about')}`}>
                ABOUT
              </a>
            </p>
            <p>
              <a
                href="https://github.com/MichealS0"
                className={`${isActive('https://github.com/MichealS0')}`}>
                GITHUB
              </a>
            </p>
          </li>
        </ul>
      </div>
    );
  }
  