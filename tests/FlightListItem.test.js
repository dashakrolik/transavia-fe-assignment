import FlightListItem from "../shared/FlightListItem";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const mockFlight = {
  outboundFlight: {
    id: "AMSFNC20221110HV6629",
    departureDateTime: "2022-11-10T06:25:00",
    arrivalDateTime: "2022-11-10T09:35:00",
    marketingAirline: {
      companyShortName: "HV",
    },
    flightNumber: 6629,
    departureAirport: {
      locationCode: "AMS",
    },
    arrivalAirport: {
      locationCode: "FNC",
    },
  },
  pricingInfoSum: {
    totalPriceAllPassengers: 58.7,
    totalPriceOnePassenger: 58.7,
    baseFare: 29.51,
    taxSurcharge: 29.19,
    currencyCode: "EUR",
    productClass: "Basic",
  },
};

describe("flight list item component", () => {
  it("renders a flight list item", () => {
    render(<FlightListItem flight={mockFlight} />);
    // check if all components are rendered
    expect(screen.getByTestId("flightlist-item-container")).toBeInTheDocument();
    expect(screen.getByTestId("flightlist-item-flight-id")).toBeInTheDocument();
    expect(
      screen.getByTestId("flightlist-item-departure-date-time")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flightlist-item-arrival-date-time")
    ).toBeInTheDocument();
    expect(screen.getByTestId("flightlist-item-price")).toBeInTheDocument();
  });
});
