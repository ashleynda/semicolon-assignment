package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class ReadingUntilSpecifiedSum {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);
        int sum = 0;
        System.out.println("Enter a number:  ");
        int number = input.nextInt();

       while (sum <= number) {
           System.out.println("Enter number:  ");
           sum += input.nextInt();

           System.out.println("The current sum is " + sum);
       }
        System.out.println();

    }
}
