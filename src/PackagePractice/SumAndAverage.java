package PackagePractice;

import java.util.Scanner;

public class SumAndAverage {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int total = 0;
        int scoreCounter = 1;


        while (scoreCounter <= 10){
            System.out.println("Enter scores:  ");
            int scores = input. nextInt();

            total += scores;

            scoreCounter++;
        }
        int average = total / 10;

        System.out.printf("The total scores is %d%n:  ", total);
        System.out.printf("The average scores is %d%n:  ", average);
    }
}



