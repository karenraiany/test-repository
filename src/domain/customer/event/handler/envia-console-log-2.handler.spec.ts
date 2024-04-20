import EnviaConsoleLog2Handler from "./envia-console-log-2.handler";
import CustomerCreatedEvent from "../customer-created.event";
import CustomerFactory from "../../factory/customer.factory";

describe("EnviaConsoleLog2Handler tests", () => {
  test("should log the enviaConsoleLog2 handler", () => {
    console.log = jest.fn();

    const customer = CustomerFactory.create(`John`);

    const event = new CustomerCreatedEvent(customer);

    const handler = new EnviaConsoleLog2Handler();

    handler.handle(event);

    expect(console.log).toHaveBeenCalledWith(
      `Esse é o segundo console.log do evento: CustomerCreated`
    );
  });
});
