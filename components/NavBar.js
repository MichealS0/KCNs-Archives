export function NavBar({ currentPage }) {
    const isActive = (page) => {
      return page === currentPage ? 'text-white border-b-2 border-blue-300' : 'text-white';
    };
  
    return (
      <div className="flex justify-evenly p-5 textBackground">
        <h1 className="text-white"><a href="/">KCN</a></h1>
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
  