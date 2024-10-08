"use client";

import React from "react";
import "./pagination.css"
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="pag-container" style={{padding:'0 2rem'}}>
      <button
        className='pag-button'
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className='pag-button'
        onClick={() => router.push(`?page=${page + 1}`)}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
