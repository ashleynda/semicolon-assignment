package tdd;

import java.util.Scanner;

public class FinancialApplication {
        public static void main(String[] args) {

            Scanner input = new Scanner(System.in);

            System.out.print("Enter the subtotal and a gratuity rate:  ");
            double subtotal = input.nextDouble();
            double rate = input.nextDouble();

            double gratuity = rate / subtotal;
            double total = (rate/10) + subtotal;



            System.out.printf("The Gratuity is $%.1f ", gratuity);
            System.out.printf("total is $%.1f", total);
        }
    }



