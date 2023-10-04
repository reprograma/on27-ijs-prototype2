import { BanksAccount  } from "../classes/BanksAccount.js";
import { Bank ,  bank1  } from "../classes/Bank.js";

import { Client } from "../classes/Client.js";

describe("BanksAccount class", () => {
  let client;
  let bank;
  let account1;
  let account2;

  beforeEach(() => {
    client = new Client("Lilica");
    bank = new Bank(1, "ProgBank", 0.05);
    client.banks.push("ProgBank");
    account1 = new BanksAccount(client, bank, "12345", "6789");
    account2 = new BanksAccount(client, bank, "54321", "9876");
  });

  test("COnta deve ser criada com as propriedades corretas", () => {
    expect(account1.client).toEqual(client);
    expect(account1.bank).toEqual(bank);
    expect(account1.accountNumber).toBe("12345");
    expect(account1.agencyNumber).toBe("6789");
    expect(account1.balance).toBe(0);
    expect(account1.qtdWhithdrawal).toBe(0);
    expect(account1.withdrawalTax).toBe(0.03);
  });

  test("Metodo de Credito deve aumentar valor", () => {
    account1.credit(100);
    expect(account1.balance).toBe(100);
  });

  test("Metodo Debito deve diminuir seu valor", () => {
    account1.credit(200);
    account1.debit(50);
    expect(account1.balance).toBe(150);
  });

  test("Metodo Transfer deve transferir dinheiro", () => {
    account1.credit(500);
    account1.transferTo(account2, 200);
    expect(account1.balance).toBe(300);
    expect(account2.balance).toBe(200);
  });

  test("O metodo de Transfer deve funcionar com outros bancos' withdrawal tax", () => {
    account1.credit(1000);
    account2.credit(500);
    account1.transferTo(account2, 300);
    expect(account1.balance).toBe(700);
    expect(account2.balance).toBe(300 - 300 * 0.05); // 5% transfer tax applied
  });

  // test("closeAccount deve encerrar conta se o saldo for 0", () => {
  //   account1.credit(0);
  //   expect(account1.closeAccount()).toBe("Conta encerrada com sucesso!");
  // });

  // test("Metodo de closeAccount não deve fechar a conta se o saldo for maior que 0", () => {
  //   account2.credit(500);
  //   expect(account2.closeAccount()).toBe("Não é possível encerrar a conta, pois você ainda tem saldo!");
  // });
});

