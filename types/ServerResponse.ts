import type { New } from "./New.ts";

export interface ServerResponse {
  status: string;
  totalResult: number;
  articles: New[];
}
