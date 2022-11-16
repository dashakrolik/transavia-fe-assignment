import React, { FC } from "react";

export type TFlightListItem = {
  /**
   * List item title
   */
  outboundFlight?: {
    // id: string,

      id?: string,
      departureDateTime?: string,
      arrivalDateTim?: string,
      marketingAirline?: {
          companyShortName?: string
      },
      flightNumber?: number,
      departureAirport?: {
          locationCode?: string
      },
      arrivalAirport?: {
          locationCode?: string
      }
  };
  /**
   *    * List item description
   */
  /**
   * Id
   */
  id?: number;
  other?: any;
  // children: React.ReactNode;
};

const FlightListItem: FC<TFlightListItem> = (props) => {
  const {
    outboundFlight,
    // children
  } = props;
console.log(outboundFlight)
  return (
    <div key={outboundFlight?.id}>
      <span style={{ color: "white" }}>{outboundFlight?.id}</span>
      <span>{outboundFlight?.departureDateTime}</span>
      {/* {children} */}
    </div>
  );
};

export default FlightListItem;
