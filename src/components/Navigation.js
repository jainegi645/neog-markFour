import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bgImage">
      <nav className="">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <div>
                <a
                  className="text-2xl font-bold customTextColor2  lg:text-3xl "
                  href="#"
                >
                  Jai.
                  <span className="bg-clip-text text-transparent customTextColor">
                    Portfolio
                  </span>
                </a>
              </div>

              {/**<!-- Mobile menu button -- */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-white  hover:text-yellow-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col text-white capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
            
              <Link className="mt-2 lg:mt-0 lg:mx-4 hover:text-yellow-400 " to="/">Home</Link>           
              <Link className="mt-2 lg:mt-0 lg:mx-4 hover:text-yellow-400 dark:hover:text-gray-200" to="/Blogs">Blogs</Link>             
              <Link className="mt-2 lg:mt-0 lg:mx-4 hover:text-yellow-400  dark:hover:text-gray-200" to="/projects">Projects</Link>
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
            <a
              href="https://www.linkedin.com/in/jai-negi/"
              target='_blank'
              className="mx-2 text-white dark:text-gray-300 hover:text-yellow-400 "
              aria-label="linkedin"
            >
            <img  className='rounded-full bg-white' width='20px' height='20px'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEqElEQVRoge2a328VRRTHP5Xa3gYUbkuFF4hEowFJJfFJCD8MqCX4gCYqCrwh+MKPoK8gPPDLkJCQNPHBJ/8CQkKITZS0VLSK+OPB0oL8CNREIGnQWCnULA/nTGa5d3d2du/uvZLwTTZzd+bMmTM7c858Z+bCI/y/0JSjrnZgGbAEWAA8AzwFTNXyf4A/gUvAb8AA0A+M5WhDZpSAjUAv8B8QpHwmgS+BDUBrnW0HoA34CPgjZNQd4GtgF7AWmA+Ugcf1KWveWmA3cErrmPqjwE7k49QFa4DfQwb8AGwCpmfQNQP4ADgb0ncRWJ2LpTEoAZ+FGvwReC1H/d3ATyH9PRQwOrMRwwPEabcCU/JuRHVuB8axoz0rL+XzkOEOgCFgYV6KHegChrXNC2pDTegMKfwemFmrwhQoIyE6QHxydlZFJex0OoNdD+qJqcB32GmWyWeMYw8hi12j0IGdFT1pK6/BOnaUT7QAh5B1ZBQ4oHlFoQsbALp9K7Vh14mtMTIHqV6l99diqQd2YJ3fa4p9jF0n4kLsqMosRriVWZmLRDPws7a1I0m4hKUdrsXOdGQJtiPXa7XUA6tDbTm52QZshHDhANVTa1/NZiajCRtJ33cJ9qrQpgSFLUhnRpGvs49inT2MLYiNJ+ME2hFafYdsBLBeKAMTwD1Cdj4WEliGOPcZ4HaCsm+onlqnE8oHgJeBL5B14V/EH48D6ypscWEM+BZx/uVRAoe1wV0eyuI2Sknlrucs/pxqj9b51GSEv8J8TX/1VAbifK7tsik3nbyMzPE5iE/NATYj29+XkC/9tEe7v1TY/ABGtMHIwgrEjUDc+xHgc+CJGH3TEOc1ETNpmr2gsuejCm9pYUeCkihDk95BGMNeZEswoekezQfp5CWt925C+zNV7mZU4YQW+oTRtB1pw1LyqCBgKMdmzTuW0H4r9pygCkV2ZK++XwFWIvR8FXBV83er3Fz86I6zI0VOLbPDXFmh51XNH9H3Kfo+mdC+c2oV6eyTRI92C9WGR/lXJaqcPRwdLmj6XIKSLDAs+m5F/t2Kcl88r6kZyQc6MqTpiymVNgJdmkaOyICmK+pmTna8oml/VGEZSxpnJChK6yOueZ9GFoTcGtL4pMkMj8gY8BUS2t52KGo03kGCRC/wV5zQeiyBc6FRI9IEnNPy91wGtiIbpQB43SGXlf1m0RXGG1p2DY9riJ0qfI74sHg6ouH+FOVpdBk0I6w3ALYldQKE95iVeLtPhTrBfOBhUlwKmdOKcWzMbiQWITvKgAxXGT3YL+DDv4pCJ8I6AuBoFgUlZJMTIAfJjTjEngYMqg2D1HDP2InQgAC5VujMwzpPtGMPMS6Sw4XPPOzQDlMfLrYo1OYIfvt4L8zCTrNx5Oy1OS/lITQj0ck49iByV58rStgAECAHynndvjYhVxlmnTCOXejdezd22APkLHYLQjrToh34EEs7zFTK87bYiRIyvQydCRBG2gd8AryJ7OI6EILXor8XAm+pTB/2nMDQjm006B8Qrcip+EnsdjbNcw84gRDAmjqQ559qpiPnx0uRff+zSLg2h3J/AzeQUHoe4Vh9OKj4IzzMuA/HoM0q2UDb3AAAAABJRU5ErkJggg=="/>
            </a>
           

            <a
              href="https://github.com/jainegi645"
              target='_blank'
              className="mx-2 text-white dark:text-gray-300 hover:text-yellow-400 dark:hover:text-gray-300"
              aria-label="Github"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
