package Practice;

import java.util.Scanner;

public class CurrencyExchange {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);

            System.out.println("Enter the exchange rate from dollars to RMB:  ");
            double exchange = input.nextDouble();
            System.out.println("Enter 0 to convert dollars to RMB and 1 vice versa:  ");
            int convert = input.nextInt();
            System.out.println("Enter the dollar amount:  ");
            int dollarAmount = input.nextInt();

            double rate = exchange * dollarAmount;
            System.out.printf("$100.0 is %d yuan", convert);



        }
    }


