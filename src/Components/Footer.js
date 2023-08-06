import { FaApple, FaGoogle } from "react-icons/fa";

function Footer(params) {
  return (
    <div className="bg-[#f2f2f2] py-12 px-20 w-full">
      <div className="grid grid-cols-5 gap-x-8">
        <div className="col-span-1">
          <Logo />

          <button className="rounded-full bg-white text-xl px-4 py-2 shadow-md mt-12">
            <div className="flex flex-row items-center">
              <span className="mr-4 text-base font-semibold">Get the app</span>
              <FaApple size={20} className="mr-1" />
              <FaGoogle size={20} />
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-lg">About Fresha</span>
          <button className="mt-2">Careers</button>
          <button className="mt-2">Customer Support</button>
          <button className="mt-2">Blog</button>
          <button className="mt-2">Sitemap</button>
          
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-lg">About Fresha</span>
          <button className="mt-2">Careers</button>
          <button className="mt-2">Customer Support</button>
          <button className="mt-2">Blog</button>
          <button className="mt-2">Sitemap</button>
          
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-lg">About Fresha</span>
          <button className="mt-2">Careers</button>
          <button className="mt-2">Customer Support</button>
          <button className="mt-2">Blog</button>
          <button className="mt-2">Sitemap</button>
          
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-lg">About Fresha</span>
          <button className="mt-2">Careers</button>
          <button className="mt-2">Customer Support</button>
          <button className="mt-2">Blog</button>
          <button className="mt-2">Sitemap</button>
          
        </div>
      </div>
    </div>
  );
}
function Logo(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 81.8 24"
      class="_444286386f _08314b986f"
      style={{ height: "22px" }}
    >
      <path d="M51.5 2.1h3.9v8.1c1.3-1.9 4-2.5 6.2-1.6 2.2.9 2.9 2.5 3 2.7.2.5.4 1 .5 1.5.6 3.6-.6 7.2.5 10.7h-3.8c-1-2.5-.4-5.3-.4-7.9 0-.7 0-1.5-.4-2.2-.5-.9-1.5-1.6-2.5-1.6-1.1 0-2.1.6-2.6 1.5-.4.8-.4 1.8-.4 2.7v7.5h-3.9l-.1-21.4zM36 15.7c.1-4.3-2.6-7.5-6.8-7.5-2.8 0-5.2 1.4-6.5 3.8-1.4 2.6-1.3 6.3.4 8.8 2.5 3.4 7.6 4.2 12.5 1.9l-1.2-3.1c-4.1 1.8-8.5 1.3-8.8-2.4H36v-1.5zm-10.3-1.5c.3-.8.7-1.4 1.3-1.9 1.2-.9 3.3-1 4.4-.1.5.4.9 1.1 1.2 1.9h-6.9zM13.1 13.9s0-2.3-1.9-2.3H6.9v12.1H3V11.6H0V8.3h3V5.7C3 3.4 5.1 0 9.7 0s6.4 3.9 6.4 3.9l-3 2.1s-.8-2.5-3.3-2.5C8.7 3.5 7 4.4 7 6.2v2h6.1c2.7 0 3.4 2 3.4 2 1-2.4 4.6-2.1 5.3-2v3.1c-2.5-.2-4.8 1.2-4.8 4.1v8h-3.9v-9.5zM48.9 16.2c-1.2-1.2-4.3-1.6-6.3-2-1-.2-1.8-.4-1.8-1.4 0-1.2 1.2-1.5 2.4-1.5s2.4.5 3.1 1.5l3-1.6c-1.7-3-6.2-3.6-9.1-2.4-.9.4-1.6 1-2.1 1.7-1.1 1.5-1 4.1.3 5.3.7.7 1.9 1.2 3.4 1.5l2.8.5c1 .2 1.9.4 1.9 1.5 0 1.3-1.4 1.6-2.6 1.6-3.2 0-3.8-3-3.8-3L36.4 19c.2 1 1.5 5 7.4 5 3.3 0 6.2-1.3 6.3-4.8-.1-1.3-.5-2.3-1.2-3zM81.2 20.8c-.7 0-1.3-.4-1.3-1.4 0-.5-.1-2.2-.1-2.6 0-2.6.1-5.1-1.7-6.9-2-2-6.6-2.2-9-.6-.9.5-1.7 1.2-2.3 2.1l2.3 2.4c.9-1.5 2.2-2.2 3.7-2.2 1.4-.1 2.6.6 3.1 2-3.1.8-7.1 1.1-8.8 4.3-.8 1.5-.6 3.4.6 4.7.9 1 2.4 1.3 3.8 1.3 2.2 0 4.3-.5 5.6-2.5.7 1.7 2.2 2.5 4 2.5.3 0 .6-.1.8-.2v-3c-.2.1-.4.1-.7.1zm-5.3-3.1c.1 2.2-1.7 3.4-3.7 3.4-1.1 0-1.8-.5-1.8-1.6 0-1.2 1-1.6 2.1-1.9l3.4-1v1.1z"></path>
    </svg>
  );
}
export default Footer;
