import EnviaConsoleLog1Handler from "./envia-console-log-1.handler";
import CustomerCreatedEvent from "../customer-created.event";
import CustomerFactory from "../../factory/customer.factory";

describe("EnviaConsoleLog1Handler tests", () => {
  test("should log the enviaConsoleLog1 handler", () => {
    console.log = jest.fn();

    const customer = CustomerFactory.create(`John`);

    const event = new CustomerCreatedEvent(customer);

    const handler = new EnviaConsoleLog1Handler();

    handler.handle(event);

    expect(console.log).toHaveBeenCalledWith(
      `Esse é o primeiro console.log do evento: CustomerCreated`
    );
  });
});
