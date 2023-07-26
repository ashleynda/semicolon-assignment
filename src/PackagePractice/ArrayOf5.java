package PackagePractice;

import java.util.Arrays;

public class ArrayOf5 {
    public static void main(String[] args) {
        int num = 2;

        int[] numbers = new int[6];
        numbers[0] = 2;
        numbers[1] = 4;
        numbers[2] = 6;
        numbers[3] = 8;
        numbers[4] = 10;
        for (int counter = 0; counter < 6; counter++){
            numbers[counter] = 2 * counter;
        }
        for (int counter = 0; counter < 6; counter++){
            System.out.println(numbers[counter]);
        }
//        System.out.println(Arrays.toString(numbers));
//        for (int counter = 1; counter < array.length; counter++) {
//                System.out.printf(counter +);
//            }
        }
    }

