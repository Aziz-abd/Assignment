import { useState } from "react";

function DropDownButton(params) {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-white px-5  py-2 text-base font-semibold  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          onClick={() => setshowMenu(!showMenu)}
          aria-expanded="true"
          aria-haspopup="true"
        >
          Menu
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
      </div>
      {showMenu && (
        <div
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right p-3 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="border-b-2 mb-4">
            <div class="p-1 mb-2" role="none">
              <h1 className="text-sm ">Log in</h1>
            </div>
            <div class="p-1 mb-2" role="none">
              <h1 className="text-sm">Download the app</h1>
            </div>
            <div class="p-1 mb-2" role="none">
              <h1 className="text-sm">Costumer support</h1>
            </div>
            <div class="p-1 mb-2" role="none">
              <h1 className="text-sm">English</h1>
            </div>
          </div>
          <div class="p-1 mb-2" role="none">
            <h1 className="text-sm font-semibold">Fresha for businesses</h1>
          </div>
        </div>
      )}
    </div>
  );
}
export default DropDownButton;
