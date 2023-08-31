package ArraySnacks;

import java.util.Arrays;
import java.util.Collections;

public class ArraySwitch {
    public static void main(String[] args) {
        int[] numbers = new int[]{1, 2, 3, 4, 5, 6};

        System.out.println("numbers before swapping " + Arrays.toString(numbers));


        int temp[];
        numbers[1] = 2;
        numbers[0] = 1;
        numbers[3] = 4;
        numbers[2] = 3;
        numbers[5] = 6;
        numbers[4] = 5;

        temp = numbers;
        System.out.println("numbers after Swapping " + Arrays.toString(numbers));
    }
}





















//    private static void swapArray(int[] numbers, int i, int j) {
//        numbers[i] = (numbers[i] + numbers[j]) - (numbers[j] = numbers[i]);
//        Collections.swap(Arrays.asList(numbers), i, j);
//    }


//        numbers[0] = numbers[1];
//        numbers[2] = numbers[3];
//        numbers[4] = numbers[5];

//    public static void swap(int numbers) {
//        Collections.swap(numbers);
//    }


