import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  buildPageLink: (page: number) => string;
}

const PaginationComponent = ({
  currentPage,
  totalPages,
  buildPageLink,
}: PaginationProps) => {
  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex items-center space-x-4">
        {/* Nút "Previous" */}
        {currentPage > 1 && (
          <li>
            <Link
              href={buildPageLink(currentPage - 1)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-secondary hover:text-white"
            >
              Previous
            </Link>
          </li>
        )}

        {/* Các trang */}
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <Link
                href={buildPageLink(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-secondary text-white"
                    : "bg-gray-200 hover:bg-secondary"
                }`}
              >
                {page}
              </Link>
            </li>
          );
        })}

        {/* Nút "Next" */}
        {currentPage < totalPages && (
          <li>
            <Link
              href={buildPageLink(currentPage + 1)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-secondary hover:text-white"
            >
              Next
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PaginationComponent;
