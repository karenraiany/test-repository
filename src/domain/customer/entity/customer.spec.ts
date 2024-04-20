import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    // Arrange
    const customer = new Customer("123", "John");

    // Act
    customer.changeName("Jane");

    // Assert
    expect(customer.name).toBe("Jane");
  });

  test("should log the customer created when handled by EnviaConsoleLogHandler1", () => {
    console.log = jest.fn();

    const customer = new Customer("123", "John");

    expect(console.log).toHaveBeenCalledWith(
      `Esse é o primeiro console.log do evento: CustomerCreated`
    );
  });

  test("should log the customer created when handled by EnviaConsoleLogHandler2", () => {
    console.log = jest.fn();

    const customer = new Customer("123", "John");

    expect(console.log).toHaveBeenCalledWith(
      `Esse é o segundo console.log do evento: CustomerCreated`
    );
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  test("should log the customer address change when handled by EnviaConsoleLogHandler", () => {
    console.log = jest.fn();

    const address = new Address("Street", 1, "13330-250", "São Paulo");

    const customer = new Customer("1", "Customer 1");

    customer.changeAddress(address);

    expect(console.log).toHaveBeenCalledWith(
      `Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.Address}`
    );
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Customer 1");

    customer.desactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
