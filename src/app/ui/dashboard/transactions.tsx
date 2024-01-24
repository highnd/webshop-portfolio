import Image from "next/image";
import React from "react";

const Transactions = () => {
  return (
    <div className="bg-secondary p-5 rounded-lg">
      <h2 className="mb-5 font-[400] text-soft">Latest Transactions</h2>
      <table className="w-full transactions">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-soft/25 transition-all cursor-pointer ">
            <td>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/banner.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover w-10 h-10 rounded-[50%]"
                />
                John Duo
              </div>
            </td>
            <td className="">
              <span className="rounded-md  text-sm text-white bg-[#f7cb7375] p-1 ">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr className="hover:bg-soft/25 transition-all cursor-pointer ">
            <td>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/banner.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover w-10 h-10 rounded-[50%]"
                />
                John Duo
              </div>
            </td>
            <td className="">
              <span className="rounded-md  text-sm text-white bg-[#f7737375] p-1 ">
                {" "}
                Cancelled{" "}
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr className="hover:bg-soft/25 transition-all cursor-pointer ">
            <td>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/banner.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover w-10 h-10 rounded-[50%]"
                />
                John Duo
              </div>
            </td>
            <td className="">
              <span className="rounded-md  text-sm text-white bg-[#62e77875] p-1">
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr className="hover:bg-soft/25 transition-all cursor-pointer ">
            <td>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/banner.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover w-10 h-10 rounded-[50%]"
                />
                John Duo
              </div>
            </td>
            <td className="">
              <span className="rounded-md  text-sm text-white bg-[#f7cb7375] p-1 ">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
