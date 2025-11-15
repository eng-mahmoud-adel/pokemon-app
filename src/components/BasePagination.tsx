import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  pages: (number | "...")[];
  currentPage: number;
  onChange: (page: number) => void;
  totalPages: number;
  limit: number;
};

const BasePagination = ({
  pages,
  currentPage,
  onChange,
  totalPages,
  limit,
}: Props) => {
  const createUrl = (page: number) =>
    `/pokemon?limit=${limit}&offset=${(page - 1) * limit}`;

  return (
    <Pagination className="overflow-x-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createUrl(currentPage - 1)}
            onClick={(e) => {
              e.preventDefault();
              onChange(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {pages.map((p, index) =>
          p === "..." ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href={createUrl(p)}
                isActive={p === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onChange(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href={createUrl(currentPage + 1)}
            onClick={(e) => {
              e.preventDefault();
              onChange(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BasePagination;
