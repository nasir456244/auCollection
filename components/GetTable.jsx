import { CollectBrisbaneContext } from "@/context/CollectBrisbane";
import React, { useContext, useState } from "react";

import EmptyTable from "./EmptyTable";
import Table from "./Table";
import { useQuery } from "@tanstack/react-query";
import { getUserTables } from "queries/getAllUserTableQuesry";
import { Button } from "@material-tailwind/react";
import PostModal from "./PostModal";

const GetTable = () => {
  const limit = 5;
  const { user } = useContext(CollectBrisbaneContext);
  const [tableData, setTableData] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["Collections", page],
    () => getUserTables(lastDoc, limit, user),
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
    
      <div className="my-8 flex flex-col gap-7">
            <div className="flex justify-between px-10 gap-5 xl:mx-[14%] ">
              <h2 className="text-2xl text-center text-gray-900 font-semibold leading-tight">
                Collections
              </h2>
              <PostModal addClient={addClient} />
            </div>
            
      <div className="w-full text-black flex justify-center">
        <div className="overflow-auto shadow-xl rounded-[10px] bg-[#f5f5f5]">
          <div className="w-[1280px] ">
            <div className="grid grid-cols-9 text-center">

            <div className="px-5 py-3 text-left border-b-2 border-gray-200 
              text-xs font-semibold col-span-2 text-gray-700 uppercase tracking-wider">Title</div>
            <div className="px-5 py-3 border-b-2 text-left border-gray-200 
              text-xs font-semibold col-span-2 text-gray-700 uppercase tracking-wider">description</div>
            <div className="px-5 py-3 border-b-2 border-gray-200 
              text-xs font-semibold text-gray-700 uppercase tracking-wider">date</div>
            <div className="px-5 py-3 border-b-2 border-gray-200 
              text-xs font-semibold text-gray-700 uppercase tracking-wider">status
            </div>
            <div className="px-5 py-3 border-b-2 border-gray-200 
              text-xs font-semibold text-gray-700 uppercase tracking-wider">Delete
            </div>
            </div>
            {tableData?.map((data) => (
                    <Table
                      key={data?.id}
                      id={data?.id}
                      title={data?.Title}
                      photo={data?.photos[0]}
                      category={data?.Category}
                      description={data?.Description}
                    />
                  ))}
          </div>

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

  );
};

export default GetTable;
