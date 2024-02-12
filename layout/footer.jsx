import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="border-t bg-zinc-900 mt-[100px]">
        <div className="container py-[20px] break-words">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm hover:underline text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://konten.am/" className="font-bold">
                AMRIZAL
              </a>
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <span className="hover:underline me-4 md:me-6">Other Apps</span>
              </li>
              <li>
                <span className="hover:underline me-4 md:me-6">Tutorial</span>
              </li>
              <li>
                <a
                  href="https://wa.me/6287733760363"
                  target="_blank"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
