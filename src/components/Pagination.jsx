import React from "react";

const Pagination = () => {
  return (
    <div className="py-8 flex items-center justify-between flex-col md:flex-row gap-2 md:gap-0">
      <div className="text-[#5E6278] text-[1.075rem] font-medium">Showing 1 to 10 of 50 entries</div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center space-x-2">
          <li>
            <a
              href="#"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500  hover:bg-blue-50 hover:text-primary rounded-md "
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight rounded-md bg-primary text-white hover:bg-gray-100 hover:text-gray-700 "
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500  hover:bg-blue-50 hover:text-primary rounded-md "
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="px-3 py-2 leading-tight text-gray-500  hover:bg-blue-50 hover:text-primary rounded-md"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500  hover:bg-blue-50 hover:text-primary rounded-md "
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500  hover:bg-blue-50 hover:text-primary rounded-md "
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500  hover:bg-blue-50 hover:text-primary rounded-md  "
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
