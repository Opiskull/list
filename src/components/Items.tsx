import React from "react";
import { ListItems } from "./ItemsList";
import { ItemAdd } from "./ItemAdd";
import { useFetch } from "react-async";

export const Items = () => {
  const { data, isLoading, reload } = useFetch<any[]>(
    "/api/all-items",
    {},
    { json: true, defer: false }
  );

  return (
    <>
      <ListItems loading={isLoading} data={data}></ListItems>
      <ItemAdd added={() => reload()}></ItemAdd>
    </>
  );
};
