package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class RightAngledTriangle {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);
        System.out.println("Enter length of a base triangle between 1 and 10:  ");
        int length = input.nextInt();

        for (int counter = 0; counter <= length; counter++){
            for (int count = 0; count <= counter; count++){
                System.out.print("* ");
            }
            System.out.println();
            if (length > 10){
                System.out.println("Invalid length");
            }
        }

    }
}
