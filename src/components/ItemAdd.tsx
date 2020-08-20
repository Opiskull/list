import React, { useState } from "react";
import { TextInput, Button } from "grommet";
import { useFetch } from "react-async";
import { Add } from "grommet-icons";

export const ItemAdd = (props: { added: () => void }) => {
  const [value, setValue] = useState("");
  const { run } = useFetch(
    "/api/add-item",
    { body: JSON.stringify({ title: value }), method: "POST" },
    {
      defer: true,
      json: true,
      onResolve: () => {
        props.added();
        setValue("");
      },
    }
  );
  return (
    <>
      <TextInput
        placeholder="What todo?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        primary
        icon={<Add></Add>}
        label="Add"
        onClick={() => {
          run();
        }}
      />
    </>
  );
};
