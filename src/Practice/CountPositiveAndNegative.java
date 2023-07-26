package Practice;

import java.util.Scanner;

public class CountPositiveAndNegative {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int positive = 0;
        int negative = 0;
        int counter = 1;
        int total = 0;

        System.out.print("Enter numbers (0 to terminate):  ");
        int number = input.nextInt();

        while(number != 0) {
            total += number;
            counter++;

            System.out.print("Enter numbers or 0 to terminate:  ");
            number = input.nextInt();
        }

            if(counter != 0){
                double average = (double) total / counter;

                System.out.printf("%nThe total number is %d%n  ", total);
                System.out.printf("The average number is %.2f%n  ", average);
            }
            else {
                System.out.println("No numbers were entered except 0");
            }


    }
}
