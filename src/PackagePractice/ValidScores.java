package PackagePractice;

import java.util.Scanner;

public class ValidScores {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        int sum = 0;


        for (int counter = 1; counter < 11;) {
            System.out.println("Enter scores:  ");
            int scores = input.nextInt();

            if (scores <= 100 && scores >= 0){
                sum = sum + scores;
                counter++;
            }
            else
                System.out.println("Invalid score");
        }
        System.out.printf("The sum of valid numbers is %d:  ", sum);


    }
}
