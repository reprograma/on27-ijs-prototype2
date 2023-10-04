import { bank1 } from "../classes/Bank.js"; 


describe("Bank class", () => {
  test("Instanciacao do banco deve ter as propriedades corretas", () => {
    expect(bank1.bankCode).toBe(200);
    expect(bank1.bankName).toBe("ProgBank");
    expect(bank1.transferTax).toBe(0.08);
  });

  test("O transfer tax pode ser mudado", () => {
    bank1.transferTax = 0.02;
    expect(bank1.transferTax).toBe(0.02);
  });

  test("Adicionar um novo cliente deve ter numero de clientes alterado", () => {
    bank1.addClient();
    expect(bank1.numberOfClients).toBe(1);
  });

  test("A classe banco deve ter o createdBank como array", () => {
    expect(Array.isArray(bank1.createdBanks)).toBe(true);
  });

  test("O Array createdBanks deve ter novas propriedades na lista", () => {
    expect(bank1.createdBanks.length).toBe(1);
    expect(bank1.createdBanks[0]).toEqual({ bankCode: 200, numberOfClients: 2 });
  });
});
