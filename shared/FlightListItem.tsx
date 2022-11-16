import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import { formatDate } from "../helpers/formatDate";
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
    <div
      data-testid="flightlist-item-container"
      className={styles.flightsListItemContainer}
      key={outboundFlight?.id}
    >
      <span data-testid="flightlist-item-flight-id">
        Flight id: {outboundFlight?.id}
      </span>
      <span data-testid="flightlist-item-departure-date-time">
        Departure date and time:{" "}
        {formatDate(outboundFlight?.departureDateTime, true)}
      </span>
      <span data-testid="flightlist-item-arrival-date-time">
        Arrival date and time:{" "}
        {formatDate(outboundFlight?.arrivalDateTime, true)}
      </span>
      <span data-testid="flightlist-item-price">
        Price: {pricingInfoSum?.totalPriceAllPassengers}
      </span>
      {/* {children} */}
    </div>
  );
};

export default FlightListItem;
