package ArraySnacks;

import java.util.Arrays;
import java.util.Collections;

public class ReversesArray {
    public static void main(String[] args) {
        Integer[] numbers = new Integer[]{100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        System.out.println("Input Array  :" + Arrays.toString(numbers));
        reverseArray(numbers);
    }

    private static void reverseArray(Integer[] numbers){
        Collections.reverse(Arrays.asList(numbers));

        System.out.println("Reversed Array :" + Arrays.toString(numbers));
    }
}
