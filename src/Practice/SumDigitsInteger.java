package Practice;

import java.util.Scanner;

public class SumDigitsInteger {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a number between 0 and 1000:  ");
        int number = input.nextInt();

        int integer = (number % 10)/ 10;

        System.out.printf("The sum of the digits is %d  ", integer);
    }
}
