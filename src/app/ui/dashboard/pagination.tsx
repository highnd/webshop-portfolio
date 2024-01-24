import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const Pagination = ({ total }: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams?.get("page") || "1";
  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 3;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < total;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex w-full items-center justify-between py-3 px-2">
      <button
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
        className="px-4 py-2 bg-cyan-600 hover:opacity-75 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 rounded-md"
      >
        Prev
      </button>
      <button
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
        className="px-4 py-2 bg-cyan-600 hover:opacity-75 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
