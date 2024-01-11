export function NavBar({ currentPage }) {
    const isActive = (page) => {
      return page === currentPage ? 'text-black border-b-2 border-black' : 'text-black';
    };
  
    return (
      <div className="flex justify-center p-1 w-screen">
        <div className="md:w-3/5 w-[90%] flex justify-around p-5 textBackground rounded-3xl border-2 border-black">
          <h1 className="text-black"><a href="/">KCN</a></h1>
          <ul className="flex items-center">
            <li className="flex justify-evenly gap-8 text-xs md:text-base ">
              <p>
                <a href="/writeups" className={`${isActive('/writeups')}`}>
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
      </div>
    );
  }
  