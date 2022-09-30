import { CollectBrisbaneContext } from "@/context/CollectBrisbane";
import React, { useContext, useState } from "react";

import EmptyTable from "./EmptyTable";
import Table from "./Table";
import { useQuery } from "@tanstack/react-query";
import { getClientsFn } from "queries/clientQueryFn";
import { Button } from "@material-tailwind/react";
import PostModal from "./PostModal";

const GetTable = () => {
  const limit = 5;
  const { user } = useContext(CollectBrisbaneContext);
  const [tableData, setTableData] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["clients", page],
    () => getClientsFn(lastDoc, limit, user),
    {
      onSuccess(data) {
        const newData = data?.docs.map((doc) => ({
          id: doc?.id,
          ...doc?.data(),
        }));

        // filter exiting data
        const filteredData = tableData.filter(
          (x) => !newData.find((y) => y.id === x.id)
        );

        setTableData([...filteredData, ...newData]);
      },
      enabled: !!user,
      keepPreviousData: true,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  const addClient = (doc) => {
    setTableData((prev) => [...doc, ...prev]);
  };

  if (isLoading) return <EmptyTable />;

  const handleNextPage = () => {
    if (!data?.empty) {
      setPage(page + 1);
      setLastDoc(data?.docs[data?.docs?.length - 1]);
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex justify-between">
              <h2 className="text-2xl text-gray-900 font-semibold leading-tight">
                Invoices
              </h2>
              <PostModal addClient={addClient} />
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block w-[800px] min-w-full shadow-md rounded-lg overflow-hidden ">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                            text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Client / Invoice
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                            text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 
                            text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Date Added
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left 
                            text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                    </tr>
                  </thead>
                  {tableData?.map((data) => (
                    <Table
                      key={data?.id}
                      id={data?.id}
                      title={data?.Title}
                      photo={data?.photos[0]}
                      createdAt={data?.createdAt}
                    />
                  ))}
                </table>
                <div className="flex m-4 gap-4">
                  <Button
                    disabled={!!data?.empty}
                    className="bg-cyan-500 px-4 text-white disabled:bg-cyan-50 disabled:cursor-not-allowed"
                    onClick={handleNextPage}
                  >
                    Load More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTable;
