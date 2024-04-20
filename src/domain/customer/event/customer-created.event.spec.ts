import { v4 as uuid } from "uuid";
import CustomerCreatedEvent from "./customer-created.event";

describe("CustomerCreatedEvent tests", () => {
  let eventData: any;
  let event: CustomerCreatedEvent;

  beforeEach(() => {
    eventData = {
      id: uuid,
      name: "John Doe",
    };

    event = new CustomerCreatedEvent(eventData);
  });

  test("should create an instance of CustomerCreatedEvent", () => {
    expect(event).toBeInstanceOf(CustomerCreatedEvent);
  });

  test("should have dataTimeOccurred property of type Date", () => {
    expect(event.dataTimeOccurred).toBeInstanceOf(Date);
  });

  test("should have eventData property set correctly", () => {
    expect(event.eventData).toEqual(eventData);
  });
});
