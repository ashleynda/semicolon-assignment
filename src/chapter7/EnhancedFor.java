package chapter7;

import java.util.Arrays;

public class EnhancedFor {
    public static void main(String[] args) {
        int[] array = new int[] {87, 68, 94, 100, 83, 78, 85, 91, 76, 87};
        System.out.println("array:  " + Arrays.toString(array));
        int total = 0;

//        for (int number : array){
//            total += number;
//        }
//        System.out.printf("Total of array elements: %d%n", total);
        for (int counter = 0; counter < array.length; counter++){
           total += array[counter];
        }
        System.out.printf("Total of array elements: %d%n", total);

//        for (int number : array){
//            System.out.printf("  %d", number);
//        }
    }
}
