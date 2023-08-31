package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class ValidatingUserInput {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);
//        int passes = 0;
//        int failures = 0;
//        int studentCounter = 1;
//
//        while (studentCounter <= 10) {
//            System.out.print("Enter result (1 = pass, 2 = fail): ");
//            int result = input.nextInt();
//            if (result == 1) {
//                passes = passes + 1;
//            }
//            else {
//                failures = failures + 1;
//            }
//            studentCounter = studentCounter + 1;
//        }
//        System.out.printf("Passed: %d%nFailed: %d%n", passes, failures);
//        if (passes > 8) {
//            System.out.println("Bonus to instructor!");
//        }
//            }
//        }
        int x = 5;
        int y = 5;

        if (x > 5) {
            if (y > 5) {
                System.out.println("x and y are > 5");
            }
            else {
                System.out.println("x is <= 5");
            }

        }
    }
}

