import React, { FC } from "react";
import styles from '../styles/Home.module.css'
import { formatDate } from '../helpers/formatDate';
import { Flight } from "../typings/flights";

export type TFlightListItem = {
  flight: Flight;
  // children: React.ReactNode;
};

const FlightListItem: FC<TFlightListItem> = (props) => {
  // maybe better to destructure all for consistency and readability...
  const {
    flight: { outboundFlight, pricingInfoSum },
    // children
  } = props;

  return (
    <div className={styles.flightsListItemContainer} key={outboundFlight?.id}>
      <span>Flight id: {outboundFlight?.id}</span>
      <span>Departure date and time: {formatDate(outboundFlight?.departureDateTime, true)}</span>
      <span>Arrival date and time: {formatDate(outboundFlight?.arrivalDateTime, true)}</span>
      <span>Price: {pricingInfoSum?.totalPriceAllPassengers}</span>
      {/* {children} */}
    </div>
  );
};

export default FlightListItem;
