"use client";
import { search } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: search) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);

      if (event.target.value) {
        event.target.value.length > 2 &&
          params.set("search", event.target.value);
      } else {
        params.delete("search");
      }

      replace(`${pathname}?${params}`);
    },
    200
  );

  return (
    <div className="flex w-fit items-center gap-3 bg-[#2e374a] p-2 rounded-xl">
      <MdSearch className="cursor-pointer hover:scale-125" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-soft"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
