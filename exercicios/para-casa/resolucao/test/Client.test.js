import { Client } from "../classes/Client.js";
import { Bank, bank1 } from "../classes/Bank.js";

describe("Client class", () => {
  let client;
  let bank;

  beforeEach(() => {
    bank = new Bank(100, "LuaBank", 0.05);
    client = new Client("Maria", 123);
  });

  test("Cliente deve ser criado com as propriedades corretas", () => {
    expect(client.name).toBe("Maria");
    expect(client.cpf).toBe(123);
    expect(client.banks).toEqual([]);
  });

  test("AddBank deve ser associado com o banco do cliente correspondente", () => {
    client.addBank(bank);
    expect(client.banks).toContain(bank.bankName);
  });

  test("AddBank nao deve ser associado a bancos diferentes ou adicionado o nome 2x", () => {
    client.addBank(bank);
    client.addBank(bank);
    expect(client.banks).toEqual([bank.bankName]);
  });

  test("RemoveBank deve desassociar um banco de um cliente", () => {
    client.addBank(bank);
    client.removeBank(bank);
    expect(client.banks).toEqual([]);
  });

  test("RemoveBank nao deve associar banco ao cliente", () => {
    const anotherBank = new Bank(200, "AnotherBank", 0.1);
    client.removeBank(anotherBank); 
    expect(client.banks).toEqual([]);
  });
});
