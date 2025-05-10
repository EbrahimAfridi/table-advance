import type { Status } from "./types";

export const STATUS: Status[] = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "processing",
    label: "Processing",
  },
  {
    value: "success",
    label: "Success",
  },
  {
    value: "failed",
    label: "Failed",
  },
];
