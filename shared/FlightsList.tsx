import React, { FC } from "react";
import FlightListItem from "./FlightListItem";
import styles from '../styles/Home.module.css'
import { Flight } from "../typings/flights";

export type TFlightsList = {
  listItems: Flight[];
}

const FlightsList: FC<TFlightsList> = (props) => {
  const { listItems } = props;

  return (
    <div className={styles.flightsListContainer}>
      {listItems.map((flight: Flight) => {
        return (
          <FlightListItem
            key={flight?.outboundFlight?.id}
            flight={flight}
          />
        );
      })}
      {listItems.length === 0 && (
        // this is not great styling / css / structure...rewrite if there is still time
        <div style={{ marginTop: "64px" }}>
          <div className={styles.noFlightsFoundContainer}>
            <span className={styles.titleSmall}>No flights found</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightsList;
