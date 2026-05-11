import type { New } from "./New";

export interface ServerResponse{
    status:string,
    totalResult:number,
    articles:New[]
}