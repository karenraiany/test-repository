import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerChangedAddressEvent from "../event/customer-changed-address.event";
import CustomerCreatedEvent from "../event/customer-created.event";
import EnviaConsoleLog1Handler from "../event/handler/envia-console-log-1.handler";
import EnviaConsoleLog2Handler from "../event/handler/envia-console-log-2.handler";
import EnviaConsoleLogHandler from "../event/handler/envia-console-log.handler";
import Address from "../value-object/address";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;
  private eventDispatcher: EventDispatcher;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.eventDispatcher = new EventDispatcher();
    this.validate();
    this.registerEventHandlers();
    this.handleCreatedCustomer();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  private registerEventHandlers() {
    const event1Handler = new EnviaConsoleLog1Handler();
    const event2Handler = new EnviaConsoleLog2Handler();
    this.eventDispatcher.register("CustomerCreatedEvent", event1Handler);
    this.eventDispatcher.register("CustomerCreatedEvent", event2Handler);

    const eventHandler = new EnviaConsoleLogHandler();
    this.eventDispatcher.register("CustomerChangedAddressEvent", eventHandler);
  }

  private handleCreatedCustomer() {
    const customerCreatedEvent = new CustomerCreatedEvent(this);
    this.eventDispatcher.notify(customerCreatedEvent);
  }

  private handleChangedAddress() {
    if (!this._address) return;
    const customerChangedAddressEvent = new CustomerChangedAddressEvent(this);
    this.eventDispatcher.notify(customerChangedAddressEvent);
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  get Address(): Address {
    return this._address;
  }

  changeAddress(address: Address) {
    this._address = address;

    this.handleChangedAddress();
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  desactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
