import EnviaConsoleLogHandler from "./envia-console-log.handler";
import CustomerChangedAddressEvent from "../customer-changed-address.event";
import Address from "../../value-object/address";
import CustomerFactory from "../../factory/customer.factory";

describe("EnviaConsoleLogHandler tests", () => {
  test("should log the customer address change when handled by EnviaConsoleLogHandler via event", () => {
    console.log = jest.fn();

    const address = new Address("Street", 1, "13330-250", "São Paulo");

    const customer = CustomerFactory.createWithAddress("John", address);

    const event = new CustomerChangedAddressEvent(customer);

    const handler = new EnviaConsoleLogHandler();

    handler.handle(event);

    expect(console.log).toHaveBeenCalledWith(
      `Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.Address}`
    );
  });
});
