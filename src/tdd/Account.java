package tdd;

import java.util.Objects;

public class Account {
    private int balance;
    private String accountPin;

    public Account(String pin) {
        this.accountPin = null;
        if(pin.matches("[0-9]+") && pin.length()==4) this.accountPin = pin;

    }

    public int getBalance(String pin) {
        if (!Objects.equals(accountPin, pin)) return 0;
        return balance;
    }


    public void deposit(int amount) {
        if (amount > 0)
            balance = balance + amount;

    }

    public int withdraw(int amount, String pin) {
        if (amount < 1) return balance;
        balance -= amount;
        if (amount > 30000)
        balance = balance + amount;
        return amount;
    }



}
