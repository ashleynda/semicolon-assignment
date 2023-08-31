package Practice;

import java.util.Scanner;

public class DisplayPyramid {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the number of lines:  ");
        int num = input.nextInt();

        for (int x = 0; x < num; x++){
            for (int y = 0; y <= x; y++) {
                System.out.print("* ");
            }
            System.out.println();

            }

        }
    }

