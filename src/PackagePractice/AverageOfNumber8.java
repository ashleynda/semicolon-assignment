package PackagePractice;

import java.util.Scanner;

public class AverageOfNumber8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int sum = 0;
        int average = 0;
        int counter = 1;


        for ( ;counter < 11; counter++) {
            System.out.println("Enter scores:  ");
            int scores = input.nextInt();

            if (scores <= 100 && scores >= 0){
                sum = sum + scores;

            }
            else
                System.out.println("Invalid score");
        }
         average = sum / counter;

        System.out.printf("The sum of valid numbers is %d:  ", sum);
        System.out.printf("The average scores is %d%n:  ", average);
    }
}
