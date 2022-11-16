import React, { FC } from "react";
import FlightListItem, { TFlightListItem } from "./FlightListItem";

export type TFlightsList = {
  listItems: TFlightListItem[];
}

const FlightsList: FC<TFlightsList> = (props) => {
  const { listItems } = props;
console.log(listItems)
  return (
    <div>
      {listItems.map((flight) => {
        return (
          <FlightListItem
            // id={item.outboundFlight.id}
            key={flight?.outboundFlight?.id}
            // @ts-ignore
            outboundFlight={flight?.outboundFlight}
          />
        );
      })}
    </div>
  );
};

export default FlightsList;
