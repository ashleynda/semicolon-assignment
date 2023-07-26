package tdd;

import java.util.Scanner;

public class RightTriangle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the number of rows:  ");
        int row = input.nextInt();

        for (int rows = 0; rows < 9; rows++) {
            for (int column = 0; column <= rows; column++) {

                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();

        for (int rows = row; rows > 0; rows--) {
            for (int column = 0; column < rows; column++) {

                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();

        for (int rows = 1; rows <= row; rows++) {

            for (int column = 1; column < rows; column++) {

                System.out.print(" ");
            }
            for (int column = rows; column <= row; column++) {
                System.out.print("*");
            }
            System.out.println("");
        }
        System.out.println();

        for (int rows = 0; rows <= row; rows++) {

            for (int column = 1; column <= row - rows; column++) {
                System.out.print(" ");
            }
            for (int column = 0; column <= rows; column++) {
                System.out.print("*");
            }
            System.out.println("");
        }

    }
}



