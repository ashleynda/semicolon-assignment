package Chapter4;

import java.util.Scanner;

public class CreditLimitCalculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double creditLimit = 0;

        System.out.println("Enter account number:  ");
        String accountNumber = input.next();

        System.out.println("Balance at the beginning of the month:  ");
        int balMonth = input.nextInt();

        System.out.println("Total of all items charged by the customer this month:  ");
        int totalItemsCharged = input.nextInt();

        System.out.println("Total of all credits applied to the customer's account this month:  ");
        int totalCredits = input.nextInt();

        System.out.println("Allowed credit:  ");
        int credit = input.nextInt();

        int newBalance = balMonth + totalItemsCharged - totalCredits;
        System.out.printf("New Balance is: %d", newBalance);
        if (newBalance > credit){
            System.out.println("\nThanks for your patronage!!!");
        }
        else{
            System.out.println("Credit limit exceeded");
        }




    }
}
