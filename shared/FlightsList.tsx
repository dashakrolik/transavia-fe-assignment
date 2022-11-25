import React, { FC } from "react";
import FlightListItem from "./FlightListItem";
import styles from "../styles/Home.module.css";
import { Flight } from "../types/flights";

export type TFlightsList = {
  listItems: Flight[];
};

const FlightsList: FC<TFlightsList> = (props) => {
  const { listItems } = props;

  return (
    <div
      data-testid="flights-list-container"
      className={styles.flightsListContainer}
    >
      {listItems.map((flight: Flight) => {
        return (
          <FlightListItem key={flight?.outboundFlight?.id} flight={flight} />
        );
      })}
      {listItems.length === 0 && (
        // this is not great styling / css / structure...rewrite if there is still time
        <div style={{ marginTop: "64px" }}>
          <div
            data-testid="flights-list-no-flights-found-container"
            className={styles.noFlightsFoundContainer}
          >
            <span
              data-testid="flights-list-no-flights-found-text"
              className={styles.titleSmall}
            >
              No flights found
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightsList;
