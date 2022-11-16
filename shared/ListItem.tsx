import React, { FC } from "react";

export type TListItem = {
  /**
   * List item title
   */
   listItemTitle: string;
  /**
   *    * List item description
   */
   listItemDescription: string;
   /**
   * Id
   */
   id: number;
   other?: any;
// children: React.ReactNode;
}

const ListItem: FC<TListItem> = (props) => {
  const { 
    listItemTitle, 
    listItemDescription
    // children 
} = props;

  return (
   <div>
    <span>{listItemTitle}</span>
    <span>{listItemDescription}</span>
    {/* {children} */}
   </div>
  );
};

export default ListItem;
