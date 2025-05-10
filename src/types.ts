import type { ColumnDef } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";

type StatusType = "pending" | "processing" | "success" | "failed";

export type Payment = {
  id: number;
  amount: string;
  status: StatusType;
  email: string;
};

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export type Status = {
    [K in StatusType]: {
        value: K;
        label: Capitalize<K>;
    }
}[StatusType];


export interface FiltersSectionProps {
  table: Table<any>;
}

export interface PaginationSectionProps {
  table: Table<any>;
}

export interface TableProps {
  table: Table<any>;
}