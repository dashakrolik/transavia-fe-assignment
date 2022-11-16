// import Link from 'next/link'
import { FormEvent } from "react";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import List from "../shared/FlightsList";
import { formatDate } from "../helpers/formatDate";
import AutoCompleteSearch from "../shared/AutocompleteSearch";

// Better to mock api response instead of importing json data
let flightsFromAMS = require("../mock-data/flights-from-AMS.json");
let airports = require("../mock-data/airports.json");
// @TODO: add a helper function for transforming dates (duplicated twice)
// delete unused
// shared input component
export default function PageWithJSbasedForm() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  // if we add an interface for the json response we should type useState as such
  const [flightsList, setFlightsList] = useState<[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [option, setOption] = useState([]);

  const onOptionSelect = (event: any) => {
    console.log(event.target.value);
    setOption(event.target.value);
  };
  const formattedAirports = airports.Airports.map((item: any) => {
    return { name: item.ItemName, id: item.ItemName };
  });
  // Handle the submit event on form submit
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;
    const origin = form.origin.value;
    const destination = form.destination.value;

    if (origin === destination) {
      alert('origin cannot be the same as destination');
      return;
    }

    const formattedFormDepartureDate = formatDate(startDate);
    showFlights(
      form.origin.value,
      form.destination.value,
      formattedFormDepartureDate
    );
  };

  const onDateChange = (date: any): void => {
    setStartDate(date);
  };

  const showFlights = (
    origin: string,
    destination: string,
    departureDate: string
  ) => {
    const filteredFlights = flightsFromAMS.flightOffer.filter((item: any) => {
      const formattedFlightDate = formatDate(
        item.outboundFlight.departureDateTime
      );
      return (
        formattedFlightDate === departureDate &&
        destination === item.outboundFlight.arrivalAirport.locationCode &&
        origin === item.outboundFlight.departureAirport.locationCode
      );
    });

    setFlightsList(filteredFlights);
    setIsSubmitted(true);

    return filteredFlights;
  };

  const sx = { width: "100%", border: "none" };

  return (
    <div>
      <p className={styles.description}>Where would you like to go?</p>

      <div className={styles.formFieldContainer} style={{ maxWidth: "500px" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <label className={styles.fieldLabel} htmlFor="origin">
            Origin
          </label>
          <div className={styles.fieldButton}>
            <AutoCompleteSearch
              onOptionSelect={onOptionSelect}
              options={formattedAirports}
              sx={sx}
              textfieldId="origin"
              textfieldName="origin"
              textfieldLabel="type origin of flight"
            />
          </div>

          <label className={styles.fieldLabel} htmlFor="destination">
            Destination
          </label>
          <div className={styles.fieldButton}>
            <AutoCompleteSearch
              onOptionSelect={onOptionSelect}
              options={formattedAirports}
              sx={sx}
              textfieldId="destination"
              textfieldName="destination"
              textfieldLabel="type your destination"
            />
          </div>

          <label className={styles.fieldLabel} htmlFor="departureDate">
            Departure date
          </label>
          <div className={styles.fieldButton}>
            <DatePicker
              minDate={new Date()}
              className={styles.fieldInput}
              selected={startDate}
              onChange={(date: Date) => onDateChange(date)}
            />
          </div>

          <button
            style={{ marginTop: "16px" }}
            className={styles.buttonPrimary}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {isSubmitted && <List listItems={flightsList} />}
    </div>
  );
}
