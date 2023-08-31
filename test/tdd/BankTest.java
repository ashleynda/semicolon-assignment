package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BankTest {
    @Test
    public void canRegisterCustomers(){
        Bank bank = new Bank("GTB");
        bank.register("Ashley", "Ndabai", "1234");
        bank.find("1");

    }
    @Test
    public void canFindAccountTest(){
        Bank bank = new Bank("GTB");
        bank.register("Ashley", "Ndabai", "1234");
        bank.find("1");
        assertEquals("Ashley Ndabai",bank.find("1").getAccountName());


    }
    @Test
    public void canDepositMoneyIntoAccount(){
        Bank bank = new Bank("GTB");
        bank.register("Ashley", "Ndabai", "1234");
        bank.find("1");
        assertEquals(0, bank.checkBalance("1", "1234"));
        bank.deposit(5_000, "1");
        assertEquals(5_000, bank.checkBalance("1", "1234"));
    }
    @Test
    public void canWithdrawMoneyFromAccountTest(){
        Bank bank = new Bank("GTB");
        bank.register("Ashley", "Ndabai", "1234");
        bank.find("1");
        assertEquals(0, bank.checkBalance("1", "1234"));
        bank.deposit(10_000, "1");
        bank.withdraw(5_000, "1","1234");
        assertEquals(5_000, bank.checkBalance("1", "1234"));
    }
    @Test
    public void canCheckBalanceTest(){
        Bank bank = new Bank("GTB");
        bank.register("Ashley", "Ndabai", "1234");
        bank.find("1");
        assertEquals(0, bank.checkBalance("1", "1234"));
        bank.deposit(5_000, "1");
        assertEquals(5_000, bank.checkBalance("1", "1234"));
    }


}
