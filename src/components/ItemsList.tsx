import React from "react";
import { List, Stack, Button, Text } from "grommet";
import { Spinner } from "./Spinner";
import { useFetch } from "react-async";
import { Trash } from "grommet-icons";

const DeleteItem = (props: { item: any }) => {
  const { isLoading, run } = useFetch(
    "/api/remove-item",
    { body: JSON.stringify(props.item), method: "POST" },
    {
      defer: true,
      json: true,
    }
  );

  return (
    <Button
      icon={<Trash></Trash>}
      onClick={() => run()}
      disabled={isLoading}
    ></Button>
  );
};

export const ListItems = (props: {
  data: any[] | undefined;
  loading: boolean;
}) => {
  if (!props.data) {
    return <div>No Items here</div>;
  }
  return (
    <Stack anchor="center">
      <List
        primaryKey={(_) => (
          <Text
            key={`e${_._id}`}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => {
              console.log(e);
            }}
            style={{ textDecoration: _.checked ? "line-through" : "none" }}
          >
            {_.title}
          </Text>
        )}
        secondaryKey={(_) => (
          <DeleteItem key={`d${_._id}`} item={_}></DeleteItem>
        )}
        data={props.data}
        // onClickItem={(_: any) => {
        //   console.log(_);
        //   // _.item.checked = !!!_.item.checked;
        // }}
      ></List>
      {props.loading ? <Spinner></Spinner> : <></>}
    </Stack>
  );
};
