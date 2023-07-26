package Practice;

import java.util.Scanner;

public class FutureInvestmentValue {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);

            System.out.println("Enter investment amount:  ");
            double investmentAmount = input.nextDouble();
            System.out.println("Enter annual interest rate in percentage:  ");
            double annualInterestRate = input.nextDouble();
            System.out.println("Enter number of years:  ");
            int numberOfYears = input.nextInt();

            double monthlyInterestRate = annualInterestRate/1200;
            double FutureInvestment = investmentAmount * Math.pow(1 + monthlyInterestRate, numberOfYears*12);

            System.out.printf("The future investment value is %.2f  ", FutureInvestment);
        }
    }


