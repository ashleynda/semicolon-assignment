package PackagePractice;

import java.util.Scanner;

public class Array3By7 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[][] numbers = new int[7][];
        numbers[0] = new int[3];
        numbers[1] = new int[3];
        numbers[2] = new int[3];
        int total = 0;

        for (int row = 0; row < numbers.length-4; row++){
            for (int column = 0; column < numbers[row].length; column++){
                System.out.println("Enter 9 values:  ");
                int values = input.nextInt();
//                System.out.println(numbers[row][column] + " ");
            }
        }
        numbers[3][0] = numbers[0][0] + numbers[0][1] + numbers[0][2];
        numbers[4][0] = (numbers[0][0] + numbers[0][1] + numbers[0][2]/3);






    }
}
