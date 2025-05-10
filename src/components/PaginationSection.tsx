import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

import type { PaginationSectionProps } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const PaginationSection = ({ table }: PaginationSectionProps) => {
  return (
    <section className="flex items-center space-x-8 justify-between">
      {/* Rows per page */}
      <div className="flex items-center space-x-2 h-6">
        <span className="text-sm font-medium">Rows per page:</span>
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger style={{ height: "32px" }}>
            <SelectValue
              placeholder={String(table.getState().pagination.pageSize)}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Page Tracker */}
      <div className="text-sm font-light">
        Page{" "}
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </div>
      {/* Pagination Action Buttons */}
      <div className="flex items-center space-x-2 justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className={`${!table.getCanNextPage() ? "cursor-not-allowed" : ""}`}
        >
          <ChevronsLeft />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`${!table.getCanNextPage() ? "cursor-not-allowed" : ""}`}
        >
          Next
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className={`${!table.getCanNextPage() ? "cursor-not-allowed" : ""}`}
        >
          <ChevronsRight />
        </Button>
      </div>
    </section>
  );
};

export default PaginationSection;
