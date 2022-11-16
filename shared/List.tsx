import React, { FC } from "react";
import ListItem, { TListItem } from "./ListItem";

export type TList = {
  listItems: TListItem[];
}

const List: FC<TList> = (props) => {
  const { listItems } = props;

  return (
    <div>
      {listItems.map((item) => {
        return (
          <ListItem
            id={item.id}
            key={item.id}
            listItemTitle={item.listItemTitle}
            listItemDescription={item.listItemDescription}
          />
        );
      })}
    </div>
  );
};

export default List;
