import FlightsList from "../shared/FlightsList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const mockFlights = [
  {
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
    deeplink: {
      href: "https://www.transavia.com/nl-NL/bookingtool/flights/deeplink?ds=AMS&as=FNC&ap=1&cp=0&od=10&om=11&oy=2022&utm_source=API&utm_medium=Public GOS",
    },
  },
  {
    outboundFlight: {
      id: "AMSCTA20221110HV5215",
      departureDateTime: "2022-11-10T06:30:00",
      arrivalDateTime: "2022-11-10T09:20:00",
      marketingAirline: {
        companyShortName: "HV",
      },
      flightNumber: 5215,
      departureAirport: {
        locationCode: "AMS",
      },
      arrivalAirport: {
        locationCode: "CTA",
      },
    },
    pricingInfoSum: {
      totalPriceAllPassengers: 48.7,
      totalPriceOnePassenger: 48.7,
      baseFare: 19.51,
      taxSurcharge: 29.19,
      currencyCode: "EUR",
      productClass: "Basic",
    },
    deeplink: {
      href: "https://www.transavia.com/nl-NL/bookingtool/flights/deeplink?ds=AMS&as=CTA&ap=1&cp=0&od=10&om=11&oy=2022&utm_source=API&utm_medium=Public GOS",
    },
  },
];

describe("flights list component", () => {
  it("renders a flight list item", () => {
    render(<FlightsList listItems={mockFlights} />);
    // check if all components are rendered
    expect(screen.getByTestId("flights-list-container")).toBeInTheDocument();
  });
  it("renders a no flights component if there are no flights found", () => {
    render(<FlightsList listItems={[]} />);
    // check if all components are rendered
    expect(
      screen.getByTestId("flights-list-no-flights-found-container")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flights-list-no-flights-found-text")
    ).toBeInTheDocument();
  });
});
