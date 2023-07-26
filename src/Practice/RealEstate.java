package Practice;

import java.util.Scanner;

public class RealEstate {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int passes = 0;
        int failures = 0;
        int studentCounter = 1;

        while (studentCounter <= 10) {

            System.out.print("Enter exam result (1 = pass, 2 = fail):  ");
            int result = input.nextInt();


            if (result == 1) {
                passes++;
            } else {
                failures++;
            }
            studentCounter++;
        }


            System.out.printf("%nThe number of passes is %d%n  ", passes);
            System.out.printf("The number of failures is %d%n  ", failures);

            if (passes > 8) {
                System.out.println("Bonus to instructor!");
            }
        }
    }
