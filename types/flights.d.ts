export type Flight = {
  outboundFlight: {
    id: string;
    departureDateTime: string;
    arrivalDateTime: string;
    marketingAirline: {
      companyShortName: string;
    };
    flightNumber: number;
    departureAirport: {
      locationCode: string;
    };
    arrivalAirport: {
      locationCode: string;
    };
  };
  pricingInfoSum: {
    totalPriceAllPassengers: number;
  };
};