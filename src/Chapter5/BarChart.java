package Chapter5;

import java.util.Scanner;

import static java.lang.System.in;

public class BarChart {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);
        int num = 0;
        System.out.println("Enter values between 1 and 30:  ");
        int values = input.nextInt();
        while (num <= values){
            System.out.println("Enter values between 1 and 30:  ");
            values = input.nextInt();
            if (num == values){
                System.out.print("* ");
            }
            System.out.println();

        }
    }
}
