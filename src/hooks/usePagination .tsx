import { useMemo } from "react";

interface Props {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    siblingCount: number;
}

export const usePagination = ({
    //passing the props
    totalCount,
    currentPage,
    pageSize,
    siblingCount=1}:Props) =>{

    const paginationRange = useMemo(()=>{},[totalCount,currentPage,pageSize,siblingCount])

}