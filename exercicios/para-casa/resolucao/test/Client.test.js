import { Client } from "../classes/Client.js";
import { Bank, bank1 } from "../classes/Bank.js";

describe("Client class", () => {
  let client;
  let bank;

  beforeEach(() => {
    bank = new Bank(100, "LuaBank", 0.05);
    client = new Client("Maria", 123);
  });

  test("Client should be created with correct properties", () => {
    expect(client.name).toBe("Maria");
    expect(client.cpf).toBe(123);
    expect(client.banks).toEqual([]);
  });

  test("AddBank method should associate a bank with the client", () => {
    client.addBank(bank);
    expect(client.banks).toContain(bank.bankName);
  });

  test("AddBank method should not associate the same bank twice", () => {
    client.addBank(bank);
    client.addBank(bank);
    expect(client.banks).toEqual([bank.bankName]);
  });

  test("RemoveBank method should disassociate a bank from the client", () => {
    client.addBank(bank);
    client.removeBank(bank);
    expect(client.banks).toEqual([]);
  });

  test("RemoveBank method should handle banks not associated with the client", () => {
    const anotherBank = new Bank(200, "AnotherBank", 0.1);
    client.removeBank(anotherBank); // Trying to remove a bank not associated with the client
    expect(client.banks).toEqual([]);
  });
});
