package PackagePractice;

import java.util.Arrays;
import java.util.Scanner;

public class Array4By3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int[][] numbers = new int[4][3];


        for (int row = 0; row < numbers.length; row++) {
            for (int column = 0; column < numbers[row].length; column++) {
                System.out.println("Enter 9 values:  ");
                int values = input.nextInt();
                numbers[row][column] = values;
            }
        }
        numbers[3][0] = numbers[0][0] + numbers[1][0] + numbers[2][0];
        numbers[3][1] = numbers[0][1] + numbers[1][1] + numbers[2][1];
        numbers[3][2] = numbers[0][2] + numbers[1][2] + numbers[2][2];
        System.out.println(Arrays.deepToString(numbers));
    }
}