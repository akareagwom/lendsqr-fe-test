import { useMemo } from "react";

interface Props {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    siblingCount: number;
    start:number;
    end:number;
}

export const usePagination = ({
    //passing the props
    totalCount,
    currentPage,
    pageSize,
    siblingCount=1}:Props) =>{

        const paginationRange = useMemo(()=>{},[totalCount,currentPage,pageSize,siblingCount]);
        //totalPageCount
        const totalPageCount = Math.ceil(totalCount/pageSize);
        //Custom range
        const range = ({start,end}:Props)=>{
            let length= end-start+1;
            return Array.from({length},(_,idx)=>idx+start);
    
        }
        const totalPageNumbers= siblingCount +5;
        


}