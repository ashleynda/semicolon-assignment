package Chapter4;

import java.util.Scanner;

public class TaxCalculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double taxBalance = 0;
        int taxPercentage = 15;
        int taxPercentage1 = 20;


        System.out.println("Enter citizen name:  ");
        String citizenName = input.next();

        System.out.println("Citizen earnings in a given year:  ");
        int earnings = input.nextInt();

        if (earnings <= 30000){
            taxBalance = (taxPercentage / 100) * earnings;
            System.out.printf("Citizens total tax: %f", taxBalance);
        }
        if (earnings > 30000){
            taxBalance = (taxPercentage1 / 100) * earnings;
            System.out.printf("Citizens total tax: %f", taxBalance);
        }
    }
}
