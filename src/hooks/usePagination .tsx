import { useMemo } from "react";

interface Props {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    siblingCount: number;
    // start:number;
    // end:number;
    num:number;
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
        const range = (start:number,end:number)=>{
            let length= end-start+1;
            return Array.from({length},(_,idx)=>idx+start);
    
        };
        const totalPageNumbers= siblingCount +5;

        if (totalPageNumbers >= totalPageCount){
            return range(1,totalPageCount);

        };
        //left & right siblingIndex Calculations 
        const leftSiblingIndex = Math.max(currentPage-siblingCount,1);
        const rightSiblingIndex = Math.min(currentPage+siblingCount,totalPageCount);

        //show dots
        const shouldShowLeftDots = leftSiblingIndex > 2;




        return paginationRange;


}