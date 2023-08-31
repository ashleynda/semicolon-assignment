package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class TwoLargestNumbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        System.out.println("Enter the values:  ");
        int values = input.nextInt();

        while (values <= 10){
            System.out.println("Enter the values:  ");
            values = input.nextInt();



        }

        for (int counter = 1; counter <= 10; counter++){
            System.out.println("Enter the values:  ");
            values = input.nextInt();



        }
    }
}
