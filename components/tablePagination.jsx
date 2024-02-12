import React from "react";

const TablePagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="w-full ">
      <div className="flex justify-center">
        <button
          onClick={() => currentPage >= 2 && setCurrentPage(currentPage - 1)}
          className={`${
            currentPage >= 2 &&
            "font-bold hover:bg-gray-100 hover:text-gray-700 "
          } flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 
                bg-white rounded-full `}
        >
          {`<`}
        </button>
        {pages.length >= 1 ? (
          pages.map((page, i) => {
            return (
              <button
                className={`${
                  page == currentPage
                    ? "text-black font-semibold  bg-[#F6C71F] "
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 hover:rounded-full"
                } rounded-full items-center justify-center w-8 h-8 leading-tight mx-1 transition duration-200 ease-in-out`}
                key={i}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })
        ) : (
          <button className="text-black font-semibold  bg-[#F6C71F] rounded-full items-center justify-center w-8 h-8 leading-tight mx-1 transition duration-200 ease-in-out">
            1
          </button>
        )}
        <button
          onClick={() =>
            currentPage <= pages.length - 1
              ? setCurrentPage(currentPage + 1)
              : console.log("penug")
          }
          className={`${
            currentPage <= pages.length - 1 &&
            "font-bold hover:bg-gray-100 hover:text-gray-700 "
          } flex items-center justify-center w-8 h-8 ms-0 leading-tight text-gray-500 
                bg-white rounded-full `}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
