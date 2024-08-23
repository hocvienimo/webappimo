import { Pagination, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationContent } from '@/components/ui/pagination'
import Link from 'next/link';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi"

const PaginationComponent = ({currentPage, totalPages, buildPageLink}) => {
   
  return (
    <div className="flex justify-center mt-6">
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        {currentPage > 1 && (
          <PaginationItem>
            <Link href={buildPageLink(currentPage - 1)} passHref className="px-4 py-2 text-thirdary">
              <FiChevronsLeft />
            </Link>
          </PaginationItem>
        )}
        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <Link href={buildPageLink(index + 1)} passHref className="px-4 py-2">
                {index + 1}
            </Link>
          </PaginationItem>
        ))}
        {/* Next Button */}
        {currentPage < totalPages && (
          <PaginationItem>
            <Link href={buildPageLink(currentPage + 1)} passHref className="px-4 py-2 text-thirdary">
              <FiChevronsRight  />
            </Link>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  </div>
  )
}

export default PaginationComponent