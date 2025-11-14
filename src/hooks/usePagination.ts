export function usePagination({
  total,
  limit,
  currentPage,
  siblingCount = 1,
}: {
  total: number;
  limit: number;
  currentPage: number;
  siblingCount?: number;
}) {
  const totalPages = Math.ceil(total / limit);
  const pages: (number | "...")[] = [];

  const startPage = Math.max(1, currentPage - siblingCount);
  const endPage = Math.min(totalPages, currentPage + siblingCount);

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) pages.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }

  return { pages, totalPages };
}
