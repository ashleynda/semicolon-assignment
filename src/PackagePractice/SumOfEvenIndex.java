package PackagePractice;

import java.util.Scanner;

public class SumOfEvenIndex {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int even = 0;

        for (int counter = 1; counter < 11; counter++){
            System.out.print("Enter scores: ");
            int scores = input.nextInt();

            if (counter % 2 == 0)
                even = even + scores;
        }
        System.out.printf("The sum of the scores is %d:  ",even);


    }
}



