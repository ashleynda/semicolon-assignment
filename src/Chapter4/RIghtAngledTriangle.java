package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class RIghtAngledTriangle {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        System.out.println("Enter the length of the base of a triangle:  ");
        int length = input.nextInt();

        for (int counter = 0; counter <= length; counter++){
            for (int count =  counter - length; count < 1; count--){
                System.out.println(" ");
            }
            for (int coun = 0; coun <= counter; coun++) {
                System.out.println("* ");
            }
        }
        System.out.println();
    }
}
