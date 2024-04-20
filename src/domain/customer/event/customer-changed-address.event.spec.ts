import CustomerChangedAddressEvent from "./customer-changed-address.event";

describe("CustomerChangedAddressEvent tests", () => {
  let eventData: any;
  let event: CustomerChangedAddressEvent;

  beforeEach(() => {
    eventData = {
      street: "Rua dos bobos",
      number: 0,
      zip: "0000-000",
      city: "São Paulo",
    };

    event = new CustomerChangedAddressEvent(eventData);
  });

  test("should create an instance of CustomerChangedAddressEvent", () => {
    expect(event).toBeInstanceOf(CustomerChangedAddressEvent);
  });

  test("should have dataTimeOccurred property of type Date", () => {
    expect(event.dataTimeOccurred).toBeInstanceOf(Date);
  });

  test("should have eventData property set correctly", () => {
    expect(event.eventData).toEqual(eventData);
  });
});
