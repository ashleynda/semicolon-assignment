package PackagePractice;

import java.util.Scanner;

public class AverageSumEven {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int even = 0;
        int average = 0;
        int counter = 1;

        for (; counter < 11; counter++) {
            System.out.print("Enter scores: ");
            int scores = input.nextInt();
            if (scores % 2 == 0) {
                even = even + scores;

            }
        }
        average = even / counter;
        System.out.printf("The average is %d:  ", average);
    }

    }

